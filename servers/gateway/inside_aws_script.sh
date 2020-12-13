#!/bin/bash
docker stop gateway
docker rm -f gateway
docker pull comtalk/gateway
#docker run -d -p 443:443 \
docker run -d -p 80:80
--name gateway \
#--env TLSCERT="/etc/letsencrypt/live/api.jayhouppermans.me/fullchain.pem" \
#--env TLSKEY="/etc/letsencrypt/live/api.jayhouppermans.me/privkey.pem" \
-v /etc/letsencrypt:/etc/letsencrypt:ro \
comtalk/gateway