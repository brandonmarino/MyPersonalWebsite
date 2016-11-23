FROM ubuntu:16.04

MAINTAINER Brandon Marino <brandon.a.marino@gmail.com>

RUN apt-get update

RUN apt-get -y install nodejs npm

RUN npm install -g cordova

RUN npm install -g ionic

COPY MyWebsite/ ~/MyWebsite

EXPOSE 9121

RUN ["chmod", "+x", "~/MyWebsite/start_server.sh”]
CMD ["~/MyWebsite/start_server.sh", "start"]