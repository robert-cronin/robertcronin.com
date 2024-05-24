FROM node:latest as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --no-cache

COPY . .

RUN ["npm", "run", "build"]

FROM nginx:alpine as production

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

