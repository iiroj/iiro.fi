SHELL := /bin/bash
PATH := ./node_modules/.bin/:$(PATH)

assets := $(shell find src/static -name '*.png' -o -name '*.jpg' -o -name '*.ico')

.PHONY: build clean rebuild
build: src/static/style.css src/static/style.min.css dist/index.html $(assets)

src/static/style.css: src/scss/index.scss
	node-sass src/scss/index.scss | postcss -u autoprefixer --autoprefixer.browsers 'last 2 version' -o src/static/style.css

src/static/style.min.css: src/static/style.css
	postcss -u cssnano -o src/static/style.min.css src/static/style.css

dist/index.html: src/index.html
	mkdir -p dist/
	inline-source --root ./src/static src/index.html > dist/index.html

$(assets):
	mkdir -p dist/
	rsync -rupE $(assets) dist/

clean:
		rm -Rf dist

rebuild:
		clean client
