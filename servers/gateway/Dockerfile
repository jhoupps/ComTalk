#Copied from Jay's assignments-jhoupps
#NOT TESTED 
#EVERYTHING IS COMMENTED OUT FOR NOW

FROM alpine
RUN apk add --no-cache ca-certificates
COPY  gateway /gateway
#EXPOSE 443
EXPOSE 80
ENTRYPOINT ["/gateway"]