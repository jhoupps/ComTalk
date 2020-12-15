#!/bin/bash
docker stop gateway
docker rm -f gateway
docker pull comtalk/gateway
docker run -d \
--name gateway \
--network comTalkNetwork \
-p 443:443 \
--restart unless-stopped \
--env TLSCERT="/etc/letsencrypt/live/api.comtalk.tech/fullchain.pem" \
--env TLSKEY="/etc/letsencrypt/live/api.comtalk.tech/privkey.pem" \
-v /etc/letsencrypt:/etc/letsencrypt:ro \
--env SESSIONKEY="ThisSeemsLikeAsGoodAKeyAsAny" \
--env REDISADDR="redisServer:6379" \
--env FORUMADDR="forum" \
--env DSN="root:ThisIsHorriblyInsecure@tcp(mysqldb:3306)/prod" \
comtalk/gateway

echo "Just missing microservice stuff on the inside_aws script now"
echo "REMINDER TO JAY - IF THIS FAILS MAKE SURE LF LINE ENDINGS ON WINDOWS MACHINE"
