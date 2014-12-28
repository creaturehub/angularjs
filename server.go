package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		http.ServeFile(res, req, req.URL.Path[1:])
	})

	fmt.Println("Listening on localhost:3000...")
	http.ListenAndServe(":3000", nil)
}
