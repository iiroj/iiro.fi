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
COPY static static
COPY --from=BUILD /app/src src
COPY --from=BUILD /app/.next .next

RUN npm install --production

EXPOSE $PORT

ENTRYPOINT [ "npm" ]

CMD ["start"]