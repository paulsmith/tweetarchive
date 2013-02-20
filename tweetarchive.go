package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"text/template"
	"time"

	_ "github.com/bmizerany/pq"
)

type Tweet struct {
	ID        int64
	Text      string
	Timestamp time.Time
}

const ftsSql = `
select id, ts_headline('english', text, q, 'HighlightAll=TRUE'), created_at
from tweets, plainto_tsquery('english', $1) q
where tsv @@ q order by ts_rank_cd(tsv, q) desc;
`

var db *sql.DB

func Search(query string) (tweets []*Tweet, e error) {
	rows, err := db.Query(ftsSql, query)
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		tweet := &Tweet{}
		err = rows.Scan(&tweet.ID, &tweet.Text, &tweet.Timestamp)
		if err != nil {
			return nil, err
		}
		tweets = append(tweets, tweet)
	}
	return tweets, nil
}

func SearchHandler(w http.ResponseWriter, r *http.Request) {
	q := r.FormValue("q")
	var tweets []*Tweet
	var err error
	if q != "" {
		log.Print(q)
		tweets, err = Search(q)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
	w.Header().Set("Content-Type", "application/json")
	b, err := json.Marshal(struct {
		Tweets []*Tweet `json:"tweets"`
	}{tweets})
	w.Write(b)
	//context := map[string]interface{}{
	//	"Tweets": tweets,
	//	"Query": q,
	//}
	//if err = searchResultsTemplate.Execute(w, context); err != nil {
	//	http.Error(w, err.Error(), http.StatusInternalServerError)
	//}
}

var searchResultsTemplate = template.Must(template.ParseFiles("searchresults.html"))

func init() {
	var err error
	db, err = sql.Open("postgres", "dbname=tweetarchive port=5433 sslmode=disable")
	if err != nil {
		panic(db)
	}
}

func main() {
	http.HandleFunc("/search", SearchHandler)
	http.Handle("/", http.FileServer(http.Dir("./static/pubweb/")))
	http.ListenAndServe(":8080", nil)
}
