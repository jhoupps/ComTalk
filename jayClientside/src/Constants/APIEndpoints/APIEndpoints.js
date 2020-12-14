export default {
    base: "https://api.comtalk.tech",
    testbase: "https://localhost:4000",
    //testbase: "https://api.comtalk.tech", //gonna try running with also testing locally on the deployed api
    handlers: {
        users: "/v1/Seattle/users",
        myuser: "/v1/Seattle/users/me",
        myuserAvatar: "/v1/Seattle/users/me/avatar",
        sessions: "/v1/Seattle/sessions",
        sessionsMine: "/v1/Seattle/sessions/mine",
        resetPasscode: "/v1/Seattle/resetcodes",
        passwords: "/v1/Seattle/passwords/",
        forum: "/v1/Seattle/forum"
    }
}