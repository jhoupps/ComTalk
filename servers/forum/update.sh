docker rm -f forum
docker pull comtalk/forum

docker rm -f mongoContainer

docker run \
    -d \
    --name mongoContainer \
    --network comTalkNetwork \
    mongo

docker run \
    --name forum \
    --network comTalkNetwork \
    comtalk/forum

exit