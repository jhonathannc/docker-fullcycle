#!/bin/bash
docker rm -f app_node nginx_serve db_mysql
docker image rm nginx-challenge-app_node:latest nginx-challenge-nginx:latest
rm -rf ./mysql/data
docker compose up -d
