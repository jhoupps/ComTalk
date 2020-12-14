docker rm -f customMongoContainer

docker run \
    -d \
    -p 27017:27017 \
    --name customMongoContainer \
    mongo