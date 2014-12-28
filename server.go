package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
)

type Book struct {
	Name, Author string
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
	w.Header().Set("Content-Type", "application/json")

	if r.Method == "GET" {
		jsonBooks := make([]string, len(books))
		for i, book := range books {
			b, _ := json.Marshal(book)
			jsonBooks[i] = string(b)
		}
		fmt.Fprintf(w, "["+strings.Join(jsonBooks, ",")+"]")
	} else if r.Method == "POST" {
		// do something here
	}
}
