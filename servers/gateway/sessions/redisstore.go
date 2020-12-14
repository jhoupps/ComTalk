package sessions

import (
	"encoding/json"
	"log"
	"time"

	"github.com/go-redis/redis"
)

//RedisStore represents a session.Store backed by redis.
type RedisStore struct {
	//Redis client used to talk to redis server.
	Client *redis.Client
	//Used for key expiry time on redis.
	SessionDuration time.Duration
}

//NewRedisStore constructs a new RedisStore
func NewRedisStore(client *redis.Client, sessionDuration time.Duration) *RedisStore {
	log.Printf("!!! New Redis Store has successfully run")

	//initialize and return a new RedisStore struct
	return &RedisStore{
		Client:          client,
		SessionDuration: sessionDuration,
	}
}

//Store implementation

//Save saves the provided `sessionState` and associated SessionID to the store.
//The `sessionState` parameter is typically a pointer to a struct containing
//all the data you want to associated with the given SessionID.
func (rs *RedisStore) Save(sid SessionID, sessionState interface{}) error {
	log.Printf("!!! I am about to save something to the redis db")

	j, err := json.Marshal(sessionState)
	if err != nil {
		log.Printf("!!! There was an error in saving" + err.Error())
		return err
	}
	//rs.Client.Set(sid.getRedisKey(), j, rs.SessionDuration)
	rs.Client.Set(sid.getRedisKey(), j, time.Hour)
	//JAY MADE THE ABOVE CHANGE TO ATTEMPT A HARDCODED DEBUG FIX
	return nil
}

//Get populates `sessionState` with the data previously saved
//for the given SessionID
func (rs *RedisStore) Get(sid SessionID, sessionState interface{}) error {
	//for extra-credit using the Pipeline feature of the redis
	//package to do both the get and the reset of the expiry time
	//in just one network round trip!

	// Set up pipelining to get previously saved session state data from redis
	rsPipeline := rs.Client.Pipeline()
	previousSessionPipeline := rsPipeline.Get(sid.getRedisKey())

	// Reset expiry time, so doesn't get deleted until SessionDuration has passed.
	rsPipeline.Expire(sid.getRedisKey(), rs.SessionDuration)

	rsPipeline.Exec()
	previousSessionState, err := previousSessionPipeline.Result()
	if err != nil {
		log.Printf("!!! NOTE TO SLEEPY JAY, THIS NEXT ONE IS THE ONE I CARE ABOUT")
		log.Printf("Inside Get - The error is" + err.Error())
		return ErrStateNotFound
	}

	jsonBuffer := []byte(previousSessionState)
	if err := json.Unmarshal(jsonBuffer, sessionState); err != nil {
		log.Printf("Inside Get - The second error is " + err.Error())
		return ErrStateNotFound
	}

	//log.Printf("Inside Get -returning with no errors", err)

	return nil

	/*
		log.Printf("THE CODE HAS CHANGED TO JAY'S CODE")

		key := sid.getRedisKey()
		j := rs.Client.Get(key)

		//reset TTL
		rs.Client.Set(sid.String(), j, time.Hour)

		//for extra-credit using the Pipeline feature of the redis
		//package to do both the get and the reset of the expiry time
		//in just one network round trip!

		//documentation TODO here https://redis.uptrace.dev/

		bytesJ, err := j.Bytes()
		if err != nil {
			return ErrStateNotFound
		}
		return json.Unmarshal(bytesJ, sessionState)
	*/
}

//Delete deletes all state data associated with the SessionID from the store.
func (rs *RedisStore) Delete(sid SessionID) error {
	rs.Client.Del(sid.getRedisKey())
	return nil
}

//getRedisKey() returns the redis key to use for the SessionID
func (sid SessionID) getRedisKey() string {
	//convert the SessionID to a string and add the prefix "sid:" to keep
	//SessionID keys separate from other keys that might end up in this
	//redis instance
	return "sid:" + sid.String()
}
