package auth

import (
	"os"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	_ "github.com/joho/godotenv/autoload"
)

var SigningKey = []byte(os.Getenv("JWT_SECRET"))

func GenerateJwt(username string) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)

	claims["authorized"] = true
	claims["user"] = username
	claims["exp"] = time.Now().Add(time.Minute * 30).Unix()

	jwtString, err := token.SignedString(SigningKey)

	if err != nil {
		return "", err
	} else {
		return jwtString, nil
	}
}
