#!/bin/bash

docker build -t comtalk/jayclientside .
docker push comtalk/jayclientside
ssh -i "../../comtalk_keys.pem" ec2-user@ec2-18-236-237-131.us-west-2.compute.amazonaws.com  < ./inside_aws_script.sh

