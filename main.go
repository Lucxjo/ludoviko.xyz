package main

import (
	"flag"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"github.com/lucxjo/web/models"
	"github.com/lucxjo/web/routes"
	"github.com/lucxjo/web/routes/routes-base"
	log "github.com/sirupsen/logrus"
)

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

	if clean {
		db.Migrator().DropTable(&models.SocialLinks{})
	}

	db.AutoMigrate(&models.SocialLinks{})

	routes.ApiRouteHandler(db, r)
	routes.WellKnownsRouteHandler(r)
	routesbase.HandleSocialRoutes(r)
	routesbase.HandleAboutRoutes(r)
	routesbase.HandleIndexRoutes(r)

	err = http.ListenAndServe(":3000", r)
	if err != nil {
		log.Fatalf("failed to start server: %v", err)
	}
}
