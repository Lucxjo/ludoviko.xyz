package routesbase

import (
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

func HandleBlogRoutes(r *mux.Router) {
	r.HandleFunc("/blog", func(w http.ResponseWriter, req *http.Request) {
		langOpts := [2]string{"en", "eo"}
		acceptLangHeader := req.Header.Get("Accept-Language")
		println(acceptLangHeader)

		acceptLangs := strings.Split(strings.Split(acceptLangHeader, ";")[0], ",")

		for _, lang := range acceptLangs {
			for _, langOpt := range langOpts {
				if strings.Contains(lang, langOpt) {
					http.ServeFile(w, req, "./dist/"+langOpt+"/blog/index.html")
					return
				}
			}
		}

		http.ServeFile(w, req, "./dist/en/blog/index.html")
	}).Methods("GET")
}
