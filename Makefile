all: tweetarchive

tweetarchive: tweetarchive.go
	go fmt $<
	go build $<
	nrsc $@ static/pubweb

tweetarchive.exe: tweetarchive.go
	CGO_ENABLED=0 GOOS=windows GOARCH=386 go build -o $@ $<
	nrsc $@ static/pubweb

tweetarchive.linux: tweetarchive.go
	CGO_ENABLED=0 GOOS=linux GOARCH=386 go build -o $@ $<
	nrsc $@ static/pubweb

tweetarchive.osx: tweetarchive.go
	CGO_ENABLED=0 GOOS=darwin GOARCH=386 go build -o $@ $<
	nrsc $@ static/pubweb

build-all: tweetarchive.exe tweetarchive.linux tweetarchive.osx
