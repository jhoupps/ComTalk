package main

import (
	"database/sql"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/ComTalk/servers/gateway/handlers"
	"github.com/ComTalk/servers/gateway/models/users"
	"github.com/ComTalk/servers/gateway/sessions"
	"github.com/go-redis/redis"
)

//The main entrypoint for our server

//main is the main entry point for the server
func main() {
	//Section 1 - Reading Enviroment Variables

	//Read the ADDR environment variable to get the address
	//	the server should listen on. If empty, default to ":80"
	addr := os.Getenv("ADDR")
	if len(addr) == 0 {
		addr = ":443" //TODO - CHANGE TO 443 AFTER I GET HTTPS WORKING
	}

	//HTTPS Enviroment Variables

	//get the TLS key and cert paths from environment variables
	//this allows us to use a self-signed cert/key during development
	//and the Let's Encrypt cert/key in production
	tlsKeyPath := os.Getenv("TLSKEY")
	tlsCertPath := os.Getenv("TLSCERT")
	if len(tlsCertPath) == 0 {
		log.Fatal("Error - could not find tlsCertPath enviroment variable")
	}
	if len(tlsKeyPath) == 0 {
		log.Fatal("Error - could not find tlsCertPath enviroment variable")
	}

	//Sessions and Stores Enviroment Variables

	//sessionKey: a string to use when signing and validating SessionIDs
	sessionKey := os.Getenv("SESSIONKEY")
	if len(sessionKey) == 0 {
		log.Fatal("Error - could not find sessionKey enviroment variable")
	}
	//redisAddr: the address of your redis session store server
	redisAddr := os.Getenv("REDISADDR")
	if len(redisAddr) == 0 {
		log.Fatal("Error - could not find redisAddr enviroment variable")
	}

	//dsn: the full data source name to pass as the second parameter to sql.Open()
	dsn := os.Getenv("DSN")
	if len(dsn) == 0 {
		log.Fatal("Error - could not find dsn enviroment variable")
	}

	//Microservice Enviroment Variables

	/*
		messagesAddr := os.Getenv("MESSAGESADDR")
		if len(messagesAddr) == 0 {
			log.Fatal("Error - could not find MESSAGESADDR enviroment variable")
		}

		summaryAddr := os.Getenv("SUMMARYADDR")
		if len(summaryAddr) == 0 {
			log.Fatal("Error - could not find SUMMARYADDR enviroment variable")
		}
	*/

	//Section Two - Setting Up Database and other Store connections

	//Create a new Redis Client
	rdb := redis.NewClient(&redis.Options{
		Addr:     redisAddr, // use default Addr
		Password: "",        // no password set
		DB:       0,         // use default DB
	})
	redisStore := sessions.NewRedisStore(rdb, time.Hour)

	//Open a mysql database
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal(err)
	}
	//Initialize my user Store
	sqlStore := users.NewMySQLStore(db)

	hctx := &handlers.HandlerContext{
		SigningKey:    "my signing key",
		SessionsStore: redisStore,
		UserStore:     sqlStore,
	}

	//Section Three - Microservice Gateway Stuff

	//Microservice handling and routing
	//Note - this does not include round robin handling cause I didn't do that on A5

	/*
			summaryDirector := func(r *http.Request) {
			r.Host = summaryAddr
			r.URL.Host = summaryAddr
			r.URL.Scheme = "http"
		}

		summaryMicroservice := &httputil.ReverseProxy{Director: summaryDirector}

		messagingDirector := func(r *http.Request) {
			r.Header.Add("X-User", "blaaah")
			r.Host = messagesAddr
			r.URL.Host = messagesAddr
			r.URL.Scheme = "http"
		}

		messagingMicroservice := &httputil.ReverseProxy{Director: messagingDirector}
	*/

	//Section Four - The Actual Routing

	//Create a new mux for the web server.
	mux := http.NewServeMux()

	/*mux.Handle("/v1/summary", summaryMicroservice)
	mux.Handle("/v1/channels", messagingMicroservice)
	mux.Handle("/v1/channels/", messagingMicroservice)
	mux.Handle("/v1/messages/", messagingMicroservice) */
	mux.HandleFunc("/v1/Seattle/users", hctx.UsersHandler)
	mux.HandleFunc("/v1/Seattle/users/", hctx.SpecificUserHandler)
	mux.HandleFunc("/v1/Seattle/sessions", hctx.SessionsHandler)
	mux.HandleFunc("/v1/Seattle/sessions/", hctx.SpecificSessionHandler)
	mux.HandleFunc("/v1/Seattle/helloWorld", handlers.HelloHandler)

	corsWrappedMux := handlers.NewCORSMiddleware(mux)

	//Start a web server listening on the address you read from the environment variable, using the mux you created as
	//	the root handler. Use log.Fatal() to report any errors that occur when trying to start the web server.
	log.Printf("The server is listening at port" + addr)
	log.Fatal(http.ListenAndServeTLS(addr, tlsCertPath, tlsKeyPath, corsWrappedMux))

}
