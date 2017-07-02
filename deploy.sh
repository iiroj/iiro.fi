#!/bin/sh

SOURCE=./public/
TARGET=s3://iiro.fi

aws s3 sync $SOURCE $TARGET --delete --sse
