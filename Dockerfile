FROM node:alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build/. /public/.
COPY nginx.conf /etc/nginx/nginx.conf
