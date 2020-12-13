#!/bin/bash

echo "not done yet!"

#the command to ssh in is
#ssh -i "../../comtalk_aws_instance.pem" ec2-user@ec2-34-211-151-171.us-west-2.compute.amazonaws.com

./build.sh 
docker push comtalk/gateway
ssh -i "../../comtalk_aws_instance.pem" ec2-user@ec2-34-211-151-171.us-west-2.compute.amazonaws.com < inside_aws_script.sh
