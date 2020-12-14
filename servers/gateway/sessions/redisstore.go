package sessions

import (
	"encoding/json"
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
	j, err := json.Marshal(sessionState)
	if err != nil {
		return err
	}
	rs.Client.Set(sid.getRedisKey(), j, rs.SessionDuration)
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
		return ErrStateNotFound
	}

	jsonBuffer := []byte(previousSessionState)
	if err := json.Unmarshal(jsonBuffer, sessionState); err != nil {
		return ErrStateNotFound
	}
	return nil
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
