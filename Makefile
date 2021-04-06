back:
	npm run server

front:
	npm run start

install-deps:
	npm ci

build:
	rm -rf dist
	npm run build

.PHONY: test
