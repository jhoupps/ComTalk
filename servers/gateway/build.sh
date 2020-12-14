#!/bin/bash

GOOS=linux go build
go build .
docker build -t comtalk/gateway .
go clean