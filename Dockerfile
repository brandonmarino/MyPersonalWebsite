FROM ubuntu:16.04

MAINTAINER Brandon Marino <brandon.a.marino@gmail.com>

LABEL=Description="My website writen using Ionic V1"

RUN apt-get update

RUN npm install nodejs

RUN npm install -g cordova

RUN npm install -g ionic

COPY MyWebsite/ ~/MyWebsite

EXPOSE 80