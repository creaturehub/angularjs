package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Book struct {
	Name   string `json:"name"`
	Author string `json:"author"`
}

var books = []Book{
	{"Brave New World", "Aldous Huxley"},
	{"Odyssey", "Homer"},
	{"AngularJS: Up & Running", "Shyam Seshadri & Brad Green"},
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, r.URL.Path[1:])
	})

	http.HandleFunc("/api/book", bookHandler)

	fmt.Println("Listening on localhost:3000...")
	http.ListenAndServe(":3000", nil)
}

func bookHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		w.Header().Set("Content-Type", "application/json")
		enc := json.NewEncoder(w)
		enc.Encode(books)
	} else if r.Method == "POST" {
		var newBook Book
		body, _ := ioutil.ReadAll(r.Body)
		json.Unmarshal(body, &newBook)
		books = append(books, newBook)
	}
}
