FROM node:latest

MAINTAINER Brandon Marino <brandon.a.marino@gmail.com>

COPY MyWebsite/ ~/MyWebsite
WORKDIR ~/MyWebsite

RUN npm install -g cordova ionic && npm rebuild node-sass

EXPOSE 8100

CMD ["ionic", "serve"]
