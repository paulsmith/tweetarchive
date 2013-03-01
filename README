Tweet archive search

Indexes your Twitter archive .zip file so you can search it by keyword or
phrase.

Requirements

 * PostgreSQL 8.3 or greater (for full-text search support)

How to install

Just download the binary executable for your OS and architecture and execute it
from the command line.

How to run

By default, assumes you have a local PostgreSQL instance running on port 5432.
Create a database named "tweetarchive".

	$ createdb -E UTF8 tweetarchive

Example

	$ ./tweetarchive

Navigate to http://127.0.0.1:13331 in your browser, type terms in to the box and
hit enter to search your tweets!

How to index your Twitter archive

Go to /upload, click on the file button, selected your downloaded Twitter
archive .zip file, and click Upload. Your archive will be indexed for full-text
search.

Summary of command line options

 * -dbname=<name>: name of the PostgreSQL database to store your tweets, default "tweetarchive"
 * -dbhost=<host>: database hostname, default "localhost"
 * -dbport=<port>: database port, default 5432
 * -port=<port>: port of the web application, default 13331
