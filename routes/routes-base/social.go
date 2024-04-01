package routesbase

import (
	"encoding/json"
	"html/template"
	"io"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/lucxjo/web/models"
)

func HandleSocialRoutes(r *mux.Router) {
	r.HandleFunc("/social", func(w http.ResponseWriter, req *http.Request) {
		tmpl, _ := template.ParseFiles("./dist/social.tmpl")

		resp, err := http.Get("http://localhost:3000/api/socials")

		if err != nil {
			return
		}

		var links []models.SocialLinks

		defer resp.Body.Close()

		body, err := io.ReadAll(resp.Body)

		if err != nil {
			return
		}

		json.Unmarshal(body, &links)

		var smpLinks []SocialLinks

		for i, link := range links {
				if i == 0 {
					smpLinks = append(smpLinks, SocialLinks{link.Title, link.Link, "r", link.SectOnly})
				} else {
					smpLinks = append(smpLinks, SocialLinks{link.Title, link.Link, "x", link.SectOnly})
				}
		}

		if err := tmpl.Execute(w, smpLinks); err != nil {
			return
		}
	}).Methods("GET")
}
