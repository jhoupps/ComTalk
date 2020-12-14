package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/ComTalk/servers/gateway/models/users"
	"github.com/ComTalk/servers/gateway/sessions"
	"golang.org/x/crypto/bcrypt"
)

//Defines HTTP handler functions as described in the
//assignment description. Remember to use your handler context
//struct as the receiver on these functions so that you have
//access to things like the session store and user store.

//UsersHandler handles requests for the users store
//takes post requests to create new accounts
func (hc *HandlerContext) UsersHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Calling UsersHandler")
	//if post
	if r.Method == "POST" {
		//check content type
		ctype := r.Header.Get("Content-Type")
		if !strings.HasPrefix(ctype, "application/json") {
			http.Error(w, "Request Body must be in JSON format", 415)
			return
		}
		//decode the data, store in db
		userFromRequest := &users.NewUser{}

		//create a new decoder over stdin
		//and decode the JSON into the struct
		dec := json.NewDecoder(r.Body)
		decErr := dec.Decode(userFromRequest)
		if decErr != nil {
			http.Error(w, decErr.Error(), 400)
			return
		}

		invalidErr := userFromRequest.Validate()
		if invalidErr != nil {
			http.Error(w, invalidErr.Error(), 400)
			return
		}
		theUser, conversionErr := userFromRequest.ToUser()
		if conversionErr != nil {
			http.Error(w, conversionErr.Error(), 400)
			return
		}

		theUserWithID, dbErr := hc.UserStore.Insert(theUser)
		if dbErr != nil {
			http.Error(w, dbErr.Error(), 400)
			return
		}

		//make a new session with that user
		userSession := &SessionState{time.Now(), *theUserWithID}
		_, sessionErr := sessions.BeginSession(hc.SigningKey, hc.SessionsStore, userSession, w)
		if sessionErr != nil {
			http.Error(w, sessionErr.Error(), 400)
			return
		}

		//send a response
		//header content type json
		w.Header().Set("Content-Type", "application/json")
		//status code

		//body
		enc := json.NewEncoder(w)
		encErr := enc.Encode(theUserWithID)
		if encErr != nil {
			http.Error(w, encErr.Error(), 400)
			return
		}
		w.WriteHeader(http.StatusCreated)

	} else {
		http.Error(w, "Error - Only POST headers allowed", 405)
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}
}

//SpecificUserHandler handles requests for specific users
func (hc *HandlerContext) SpecificUserHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Calling SpecificUserHandler")
	//check authenticated
	//make an empty sessionstate struct
	sessionState := &SessionState{}
	_, errUnauth := sessions.GetState(r, hc.SigningKey, hc.SessionsStore, sessionState)

	if errUnauth != nil {
		http.Error(w, "You must be authenticated to use this endpoint", 401)
		return
	}
	//get the user profile, or return status not found
	resourcePath := r.URL.Path
	//FLAW - THIS FAILS IF THERE'S SOMETHING AFTER THE USER
	userID := strings.TrimPrefix(resourcePath, "/v1/users/")

	var intUserID int64

	if userID == "me" {
		intUserID = sessionState.authenticatedUser.ID
	} else {
		tempIntUserID, err := strconv.ParseInt(userID, 10, 64)
		if err != nil {
			http.Error(w, err.Error(), 400)
			return
		}
		intUserID = tempIntUserID
	}

	//if get
	if r.Method == "GET" {
		userProfile, err := hc.UserStore.GetByID(intUserID)
		if err != nil {
			http.Error(w, "Error: User Not Found", 404)
			return
		}

		//send the users struct
		w.Header().Set("Content-Type", "application/json")

		//body
		enc := json.NewEncoder(w)
		encErr := enc.Encode(userProfile)
		if encErr != nil {
			http.Error(w, encErr.Error(), 400)
			return
		}

		w.WriteHeader(http.StatusOK)

	} else if r.Method == "PATCH" {
		//check self status
		log.Printf("%d", intUserID)
		log.Printf("%d", sessionState.authenticatedUser.ID)
		if sessionState.authenticatedUser.ID != intUserID {
			http.Error(w, "Error: You may only modify your own user profile", 403)
			return
		}
		ctype := r.Header.Get("Content-Type")
		if !strings.HasPrefix(ctype, "application/json") {
			http.Error(w, "Request Body must be in JSON format", 415)
			return
		}

		//update the users profile
		updateFromRequest := &users.Updates{}

		//create a new decoder over stdin
		//and decode the JSON into the struct
		dec := json.NewDecoder(r.Body)
		decErr := dec.Decode(updateFromRequest)
		if decErr != nil {
			http.Error(w, decErr.Error(), 400)
			return
		}

		theUserWithUpdate, dbErr := hc.UserStore.Update(intUserID, updateFromRequest)
		if dbErr != nil {
			http.Error(w, dbErr.Error(), 400)
			return
		}

		//send the users struct
		w.Header().Set("Content-Type", "application/json")

		//body
		enc := json.NewEncoder(w)
		encErr := enc.Encode(theUserWithUpdate)
		if encErr != nil {
			http.Error(w, encErr.Error(), 400)
			return
		}

		w.WriteHeader(http.StatusOK)

	} else {
		http.Error(w, "Error - Only GET or PATCH headers allowed", 405)
		return
	}

}

//SessionsHandler requests the sessions resource, then allows clients to begin a new session using an existing user's credentials
func (hc *HandlerContext) SessionsHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Calling SessionHandler")
	if r.Method == "POST" {
		//check content type
		ctype := r.Header.Get("Content-Type")
		if !strings.HasPrefix(ctype, "application/json") {
			http.Error(w, "Request Body must be in JSON format", 415)
			return
		}
		//decode the data, store in db
		credsFromRequest := &users.Credentials{}

		dec := json.NewDecoder(r.Body)
		decErr := dec.Decode(credsFromRequest)
		if decErr != nil {
			http.Error(w, decErr.Error(), 400)
			return
		}

		//Authenticating
		//Find user profile
		theUser, cantFindUserErr := hc.UserStore.GetByEmail(credsFromRequest.Email)
		if cantFindUserErr != nil {
			//do something that would take the same amount of time as authenticating
			//This hash value is a random hash from the bcrypt documentation
			bcrypt.CompareHashAndPassword([]byte("$2a$10$XajjQvNhvvRt5GSeFk1xFeyqRrsxkhBkUiQeg0dt.wU1qD4aFDcga"), []byte("I AM GARBAGE!"))
			http.Error(w, "Invalid Credentials", 401)
			return
		} else {
			authErr := theUser.Authenticate(credsFromRequest.Password)
			if authErr != nil {
				http.Error(w, "Invalid Credentials", 401)
				return
			}

			/*
				//Logging User Sign Ins to the Database
				ipAddr := r.Header.Get("X-Forwarded-For")
				ipAddr = strings.Split(ipAddr, ",")[0]

				if ipAddr == "" {
					ipAddr = r.RemoteAddr
				}

				curTime := time.Now().String()
				//example time-to-string "2020-11-13 10:43:37.1711197 -0800 PST m=+13.637847001"
				splitCurTime := strings.Split(curTime, " ")
				joinedCurTime := splitCurTime[0] + " " + splitCurTime[1]
				trimmedCurTime := strings.Split(joinedCurTime, ".")[0]
				//NOTE - THIS DOES NOT TAKE INTO ACCOUNT TIME ZONE, ALL VALUES ARE IN LOCAL TIME
				loggingErr := hc.UserStore.Log(theUser.ID, trimmedCurTime, ipAddr)
				if loggingErr != nil {
					http.Error(w, loggingErr.Error(), 400)
					return
				}

				//End Logging User Sign Ins to the Database
			*/

			sessionState := &SessionState{time.Now(), *theUser}
			_, err := sessions.BeginSession(hc.SigningKey, hc.SessionsStore, sessionState, w)
			if err != nil {
				http.Error(w, err.Error(), 400)
				return
			}

			//send the response
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusCreated)

			//body
			enc := json.NewEncoder(w)
			encErr := enc.Encode(theUser)
			if encErr != nil {
				http.Error(w, encErr.Error(), 400)
				return
			}
		}

	} else {
		http.Error(w, "Error - Only POST headers allowed", 405)
		return
	}
}

//SpecificSessionHandler allows actions related to a specific user's section
//Right now, that's just ending the current user's section
//Future sessions include allowing administrators to end sessions started by other users that have gone rogue
func (hc *HandlerContext) SpecificSessionHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Calling SpecificSessionHandler")
	if r.Method == "DELETE" {
		resourcePath := r.URL.Path
		//FLAW - THIS FAILS IF THERE'S SOMETHING BEFORE THE USER
		if strings.HasSuffix(resourcePath, "mine") {
			sessions.EndSession(r, hc.SigningKey, hc.SessionsStore)
			w.Write([]byte("signed out"))

		} else {
			http.Error(w, "Error - Can only delete own session", 403)
			return
		}

	} else {
		http.Error(w, "Error - Only DELETE headers allowed", 405)
		return
	}
}
