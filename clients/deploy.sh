#!/bin/bash

echo "not done yet!"

#the command to ssh in is
#the old one
#ssh -i "../comtalk_aws_instance.pem" ec2-user@ec2-18-236-237-131.us-west-2.compute.amazonaws.com

ssh -i "../../comtalk_keys.pem" ec2-user@ec2-18-236-237-131.us-west-2.compute.amazonaws.com
