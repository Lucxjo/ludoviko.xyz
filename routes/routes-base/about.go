package routesbase

import (
	"encoding/json"
	"html/template"
	"io/ioutil"
	"net/http"

	//"strings"

	"github.com/gorilla/mux"
	"github.com/lucxjo/web/models"
)

func HandleAboutRoutes(r *mux.Router) {
	r.HandleFunc("/about", func(w http.ResponseWriter, req *http.Request) {
		tmpl, _ := template.ParseFiles("./dist/about.tmpl")

		resp, err := http.Get("http://localhost:3000/api/socials")

		if err != nil {
			return
		}

		var links []models.SocialLinks

		defer resp.Body.Close()

		body, err := ioutil.ReadAll(resp.Body)

		if err != nil {
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

}
