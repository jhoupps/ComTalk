"use strict";

const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const { forumSchema } = require('./schemas');

const mongoEndpoint = "mongodb://mongoContainer:27017/test"

const addr = process.env.ADDR || ":80"
const [host, port] = addr.split(":")

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const connect = () => {
    mongoose.connect(mongoEndpoint);
}






connect();
mongoose.connection.on('error', console.error)
    .on('disconnected', connect)
    .once('open', main);