package main

import (
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	r := mux.NewRouter()

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist")))

	r.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		http.ServeFile(w, req, "./dist/index.html")
	}).Methods("GET")

	http.ListenAndServe(":3000", r)
}
