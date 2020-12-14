package handlers

import (
	"time"

	"github.com/ComTalk/servers/gateway/models/users"
)

//SessionState defines a session state struct for this web server
type SessionState struct {
	beginTime         time.Time
	authenticatedUser users.User
}
