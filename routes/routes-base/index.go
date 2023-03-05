package routesbase

import (
	"net/http"

	"github.com/gorilla/mux"
)

func HandleIndexRoutes(r *mux.Router) {
	// Serve static files
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist")))

	r.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		http.ServeFile(w, req, "./dist/index.html")
	}).Methods("GET")
}
