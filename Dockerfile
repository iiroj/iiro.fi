FROM node:alpine

ARG USER=docker
ARG WORKDIR=/app

USER root
WORKDIR $WORKDIR

COPY . .
RUN npm install \
    && npm run build

RUN addgroup $USER && \
    adduser -D -G $USER $USER && \
    chown -R $USER:$USER $WORKDIR

USER $USER

ENV PORT=3000

EXPOSE $PORT

CMD ["npm", "run", "production"]
