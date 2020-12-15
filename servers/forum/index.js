"use strict";

const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const { forumSchema, messageSchema } = require('./schemas');
const {
   getForumHandler,
   postForumHandler,
   getForumIDHandler,
   postForumIDHandler,
   deleteForumIDHandler
} = require('./handlers')

const mongoEndpoint = "mongodb://mongoContainer:27017/test";

const Forum = mongoose.model("Forum", forumSchema);
const Message = mongoose.model("Message", messageSchema);

// const addr = process.env.ADDR || ":80"
// const [host, port] = addr.split(":")

const app = express();

const addr = process.env.ADDR || ":80"
const [host, port] = addr.split(":")

app.use(express.json());
app.use(morgan("dev"));


const connect = () => {
    mongoose.connect(mongoEndpoint);
}

const RequestWrapper = (handler, SchemeAndDbForwarder) => {
    return (req, res) => {

        handler(req, res, SchemeAndDbForwarder);
    }
}

app.route("/v1/Seattle/forum")
    .get(RequestWrapper(getForumHandler, { Forum }))
    .post(RequestWrapper(postForumHandler, { Forum }))


app.route("/v1/Seattle/forum/:forumlID")
    .get(RequestWrapper(getForumIDHandler, { Forum, Message }))
    .post(RequestWrapper(postForumIDHandler, { Forum, Message }))
    .delete(RequestWrapper(deleteForumIDHandler, { Forum }));

connect();
mongoose.connection.on('error', console.error)
    .on('disconnected', connect)
    .once('open', main);

async function main() {
    app.listen(port, () => {
        console.log(`server is listening at http://${port}`);
    });
}