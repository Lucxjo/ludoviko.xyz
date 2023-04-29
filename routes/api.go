package routes

import (
	"encoding/json"
	_ "github.com/joho/godotenv/autoload"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/lucxjo/web/models"
	"gorm.io/gorm"
)

func ApiRouteHandler(db *gorm.DB, r *mux.Router) {
	apiRoute := r.PathPrefix("/api").Subrouter()

	apiRoute.HandleFunc("/test", func(w http.ResponseWriter, req *http.Request) {
		w.Write([]byte("Hello World"))
	}).Methods("GET")

	apiRoute.HandleFunc("/socials", func(w http.ResponseWriter, req *http.Request) {
		var socials []models.SocialLinks
		db.Find(&socials)
		json.NewEncoder(w).Encode(socials)
	}).Methods("GET")

	apiRoute.HandleFunc("/socials/{id}", func(w http.ResponseWriter, req *http.Request) {
		var social models.SocialLinks
		vars := mux.Vars(req)
		db.First(&social, vars["id"])
		json.NewEncoder(w).Encode(social)
	}).Methods("GET")

	apiRoute.HandleFunc("/socials/{id}", func(w http.ResponseWriter, req *http.Request) {
		vars := mux.Vars(req)
		headers := req.Header.Get("Authorization")
		if headers == os.Getenv("MASTER_AUTH") {
			db.Delete(&models.SocialLinks{}, vars["id"])
		} else {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
		}
	}).Methods("DELETE")

	apiRoute.HandleFunc("/socials", func(w http.ResponseWriter, req *http.Request) {
		if req.Header.Get("Authorization") != os.Getenv("MASTER_AUTH") {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
			return
		}

		var social models.SocialLinks
		json.NewDecoder(req.Body).Decode(&social)
		db.Create(&social)
		json.NewEncoder(w).Encode(social)
	}).Methods("POST")
}
