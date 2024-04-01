package routesbase

import (
	"encoding/json"
	"html/template"
	"io"
	"net/http"

	//"strings"

	"github.com/gorilla/mux"
	"github.com/lucxjo/web/models"
	log "github.com/sirupsen/logrus"
)

type SocialLinks struct {
	Name string `json:"title"`
	To  string `json:"link"`
	Padding string `json:"padding"`
	SectOnly bool `json:"sect_only"`
}

func HandleIndexRoutes(r *mux.Router) {
	r.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		tmpl, _ := template.ParseFiles("./dist/index.tmpl")

		resp, err := http.Get("http://localhost:3000/api/socials")

		if err != nil {
			log.Errorf("Index get error: %v", err)
			return
		}

		var links []models.SocialLinks

		defer resp.Body.Close()

		body, err := io.ReadAll(resp.Body)

		if err != nil {
			log.Errorf("Index io Read error: %v", err)
			return
		}

		json.Unmarshal(body, &links)

		var smpLinks []SocialLinks

		for i, link := range links {
			if !link.SectOnly {
				if i == 0 {
					smpLinks = append(smpLinks, SocialLinks{link.Title, link.Link, "r", link.SectOnly})
				} else {
					smpLinks = append(smpLinks, SocialLinks{link.Title, link.Link, "x", link.SectOnly})
				}
			}
		}

		if err := tmpl.Execute(w, smpLinks); err != nil {
			return
		}
	}).Methods("GET")

	// Serve static files
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist")))

}
