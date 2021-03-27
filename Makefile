#!/bin/bash
DOCKER_APP = hero_frontend
UID = $(shell id -u)
JSON_SERVER_VERSION := $(shell ./node_modules/.bin/json-server --version 2>/dev/null)

help: ## Show this help message
	@echo 'usage: make [target]'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

run: ## Start the containers
ifdef JSON_SERVER_VERSION
	U_ID=${UID} docker-compose up -d --build && npm run api_server
else
	U_ID=${UID} docker-compose up -d --build && npm install json-server && npm run api_server
endif

stop: ## Stop the containers
	U_ID=${UID} docker-compose down

restart: ## Restart the containers
	U_ID=${UID} docker-compose down && U_ID=${UID} docker-compose up -d

build: ## Rebuilds all the containers
	U_ID=${UID} docker-compose up --build -d

ssh-app: ## ssh's into the be container
	U_ID=${UID} docker exec -it ${DOCKER_APP} bash

log-app: ## log app
	U_ID=${UID} docker-compose logs -f -t ${DOCKER_APP}

ps: ## view docker processes
	U_ID=${UID} docker ps

.PHONY: run stop restart build ssh-app log-app ps run-api
