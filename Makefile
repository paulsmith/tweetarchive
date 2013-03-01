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

BINARIES = tweetarchive.exe tweetarchive.linux tweetarchive.osx
KEYID = 0x5CBBD1FBC8165209

tweetarchive.checksum.txt: $(BINARIES)
	echo "To verify this file, import PGP/GPG key $(KEYID):" > checksum
	echo >> checksum
	echo "    gpg --keyserver pgp.mit.edu --recv-key $(KEYID)" >> checksum
	echo >> checksum
	echo "Then verify the file:" >> checksum
	echo >> checksum
	echo "    gpg --verify $@" >> checksum
	echo >> checksum
	openssl md5 $^ >> checksum
	openssl sha1 $^ >> checksum
	echo >> checksum
	gpg --clearsign --output $@ checksum
	-rm -f checksum

publish-bin: $(BINARIES) tweetarchive.checksum.txt
	s3cmd put -P $^ s3://tweetarchivesearch/downloads/
