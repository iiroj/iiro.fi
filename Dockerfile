FROM node:alpine as BUILD

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine

ENV PORT=3000

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY --from=BUILD /app/.next .next
COPY next.config.js .
COPY src src
COPY static static

EXPOSE $PORT

ENTRYPOINT [ "npm" ]

CMD ["start"]