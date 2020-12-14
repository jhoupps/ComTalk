#!/bin/bash
docker stop redisServer
docker rm redisServer
docker run -d -p 6379:6379 --name redisServer redis
