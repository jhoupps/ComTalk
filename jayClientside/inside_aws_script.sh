#!/bin/bash
docker stop jayclient
docker rm -f jayclient
docker pull comtalk/jayclientside
docker run -d -p 443:443 -p 80:80 \
--name jayclient \
--env TLSCERT="/etc/letsencrypt/live/comtalk.tech/fullchain.pem" \
--env TLSKEY="/etc/letsencrypt/live/comtalk.tech/privkey.pem" \
-v /etc/letsencrypt:/etc/letsencrypt:ro \
comtalk/jayclientside

echo "REMINDER TO JAY - IF THIS FAILS MAKE SURE LF LINE ENDINGS ON WINDOWS MACHINE"