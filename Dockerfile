FROM node:alpine

WORKDIR /app

RUN apk add --no-cache git

VOLUME ["/app"]
EXPOSE 8000