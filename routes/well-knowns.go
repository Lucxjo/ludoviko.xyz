package routes

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

type MatrixClientData struct {
	Homeserver struct {
		BaseURL string `json:"base_url"`
	} `json:"m.homeserver"`
	IdentityServer struct {
		BaseURL string `json:"base_url"`
	} `json:"m.identity_server"`
	Msc3575Proxy struct {
		URL string `json:"url"`
	} `json:"org.matrix.msc3575.proxy"`
}

type MatrixServerData struct {
	Server string `json:"m.server"`
}

func WellKnownsRouteHandler(r *mux.Router) {
	wellKnownsRoute := r.PathPrefix("/.well-known").Subrouter()
	wellKnownsRoute.HandleFunc("/matrix/client", MatrixClient).Methods("GET")
	wellKnownsRoute.HandleFunc("/matrix/server", MatrixServer).Methods("GET")
}

func MatrixClient(w http.ResponseWriter, req *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	w.Header().Add("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization")

	wk := MatrixClientData{}
	wk.Homeserver.BaseURL = "https://matrix.ludoviko.ch"
	wk.IdentityServer.BaseURL = "https://vector.im"
	wk.Msc3575Proxy.URL = "https://sync.matrix.ludoviko.ch"

	js := json.NewEncoder(w).Encode(wk)
	if js != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
		return
	}
}

func MatrixServer(w http.ResponseWriter, req *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	w.Header().Add("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization")

	wk := MatrixServerData{}
	wk.Server = "matrix.ludoviko.ch:443"

	js := json.NewEncoder(w).Encode(wk)

	if js != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
		return
	}
}
