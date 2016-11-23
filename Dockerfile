FROM ubuntu:16.04

MAINTAINER Brandon Marino <brandon.a.marino@gmail.com>

RUN apt-get update

RUN apt-get install nodejs

RUN npm install -g cordova

RUN npm install -g ionic

COPY MyWebsite/ ~/MyWebsite

EXPOSE 80
