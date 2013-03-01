Tweet archive search
====================

Indexes [your Twitter archive][1] .zip file so you can search your tweets by
keyword or phrase.

![screenshot of upload page](https://raw.github.com/paulsmith/tweetarchive/gh-pages/images/ss4.png)

![screenshot of search box](https://raw.github.com/paulsmith/tweetarchive/gh-pages/images/ss1.png)

![screenshot of search results python](https://raw.github.com/paulsmith/tweetarchive/gh-pages/images/ss2.png)

![screenshot of search results llvm](https://raw.github.com/paulsmith/tweetarchive/gh-pages/images/ss3.png)

Requirements
------------

 * Your Twitter archive .zip file, [download it from Twitter][1]
 * PostgreSQL 8.3 or greater (for full-text search support)

How to install
--------------

Just download the binary executable for your OS and execute it from the command
line.

 * [Windows][win]
 * [Linux][lin]
 * [Mac OS X][osx]

[Signed checksums file][chksum]

How to run
----------

By default, assumes you have a local PostgreSQL instance running on port 5432.
Create a database named "tweetarchive".

	$ createdb -E UTF8 tweetarchive

Run the web app:

	$ ./tweetarchive

### Index your Twitter archive

Go to [/upload](http://127.0.0.1:13331/upload),
click on the file button, selected your downloaded Twitter archive .zip file,
and click Upload. Your archive will be indexed for full-text search.

### Search your tweets

Navigate to [http://127.0.0.1:13331/](http://127.0.0.1:13331/) in your browser,
type terms in to the box and hit enter to search your tweets!

Summary of command line options
-------------------------------

 * `-dbname=<name>`: name of the PostgreSQL database to store your tweets, default "tweetarchive"
 * `-dbhost=<host>`: database hostname, default "localhost"
 * `-dbport=<port>`: database port, default 5432
 * `-port=<port>`: port of the web application, default 13331

Contributing
------------

This app is written in Go for the server and uses AngularJS for the front-end.
It has a bare-bones Bootstrap style. It needs a lot of help, check out the
`TODO` file.

License
-------

This work is copyright 2013 Paul Smith and is licensed under the Apache License
Version 2.0, see `LICENSE`.

[1]: http://blog.twitter.com/2012/12/your-twitter-archive.html
[win]: https://tweetarchivesearch.s3.amazonaws.com/downloads/tweetarchive.exe
[lin]: https://tweetarchivesearch.s3.amazonaws.com/downloads/tweetarchive.linux
[osx]: https://tweetarchivesearch.s3.amazonaws.com/downloads/tweetarchive.osx
[chksum]: http://tweetarchivesearch.s3.amazonaws.com/downloads/tweetarchive.checksum.txt
