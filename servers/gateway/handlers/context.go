package handlers

import (
	"github.com/ComTalk/servers/gateway/models/users"
	"github.com/ComTalk/servers/gateway/sessions"
)

//HandlerContext defines a handler context struct that
//will be a receiver on any of your HTTP
//handler functions that need access to
//globals, such as the key used for signing
//and verifying SessionIDs, the session store
//and the user store
type HandlerContext struct {
	SigningKey    string
	SessionsStore sessions.Store
	UserStore     users.Store
}
