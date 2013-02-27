all: build

tweetarchive: tweetarchive.go
	go fmt $<
	go build $<

build: tweetarchive
	nrsc $< static/pubweb
