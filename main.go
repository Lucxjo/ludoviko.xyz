package main

import (
	"encoding/json"
	"flag"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type SocialLinks struct {
	ID uint `json:"id" gorm:"primary_key;autoIncrement;not null"`
	SectOnly bool `json:"sect_only"`
	Link string `json:"link" gorm:"default:''"`
	Icon string `json:"icon" gorm:"default:''"`
	CreatedAt int64 `json:"created_at" gorm:"autoCreateTime:milli"`
	UpdatedAt int64 `json:"updated_at" gorm:"autoUpdateTime:milli"`
	Title string `json:"title" gorm:"default:''"`
	Description string `json:"description" gorm:"default:''"`
}

var clean bool

func handleFlags() {
	flag.BoolVar(&clean, "clean", false, "Clean the database")
	flag.Parse()
}

func main() {
	godotenv.Load()
	r := mux.NewRouter()

	dsn := os.Getenv("DB_URI")

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatalf("failed to connect database: %v\n", err)
	}

	if (clean) {
		db.Migrator().DropTable(&SocialLinks{})
	}
	
	db.AutoMigrate(&SocialLinks{})

	// api routes
	api := r.PathPrefix("/api").Subrouter()

	api.HandleFunc("/test", func(w http.ResponseWriter, req *http.Request) {
		w.Write([]byte("Hello World"))
	}).Methods("GET")

	api.HandleFunc("/socials", func(w http.ResponseWriter, req *http.Request) {
		var socials []SocialLinks
		db.Find(&socials)
		json.NewEncoder(w).Encode(socials)
	}).Methods("GET")

	api.HandleFunc("/socials/{id}", func(w http.ResponseWriter, req *http.Request) {
		var social SocialLinks
		vars := mux.Vars(req)
		db.First(&social, vars["id"])
		json.NewEncoder(w).Encode(social)
	}).Methods("GET")

	api.HandleFunc("/socials/{id}", func(w http.ResponseWriter, req *http.Request) {
		vars := mux.Vars(req)
		headers := req.Header.Get("Authorization")
		if headers == os.Getenv("MASTER_AUTH") {
			db.Delete(&SocialLinks{}, vars["id"])
		} else {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
		}
	}).Methods("DELETE")

	api.HandleFunc("/socials", func(w http.ResponseWriter, req *http.Request) {
		if req.Header.Get("Authorization") != os.Getenv("MASTER_AUTH") {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
			return
		}

		var social SocialLinks
		json.NewDecoder(req.Body).Decode(&social)
		db.Create(&social)
		json.NewEncoder(w).Encode(social)
	}).Methods("POST")

	// Serve static files

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist")))

	r.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		http.ServeFile(w, req, "./dist/index.html")
	}).Methods("GET")

	http.ListenAndServe(":3000", r)
}
