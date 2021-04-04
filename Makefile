start:
	heroku local -f Procfile.dev

start-backend:
	npm run server

start-frontend:
	npm run start

install-deps:
	npm ci

build:
	rm -rf dist
	npm run build

deploy:
	git push heroku

.PHONY: test
