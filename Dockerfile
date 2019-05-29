FROM node:10-alpine

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN apk update

RUN apk upgrade

RUN npm install

EXPOSE 5000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=5000

CMD ["npm", "run", "dev"]
