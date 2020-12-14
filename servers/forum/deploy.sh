./build.sh 
docker push comtalk/forum
ssh -i "../../../comtalk_keys.pem" ec2-user@ec2-34-211-151-171.us-west-2.compute.amazonaws.com < update.sh