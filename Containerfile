FROM denoland/deno:alpine as node
WORKDIR /app
COPY ./site/ ./site/
RUN cd ./site && chmod +x ./twind-linux && deno run --allow-read --allow-write --allow-run ./prod.ts

FROM golang:1.21-alpine as go
WORKDIR /app
COPY ./go.mod ./go.sum ./main.go ./
COPY ./models/*.go ./models/
COPY ./routes/*.go ./routes/
COPY ./routes/routes-base/*.go ./routes/routes-base/
RUN go build .

FROM alpine:3.17
WORKDIR /app
COPY --from=node /app/dist/ ./dist/
COPY --from=go /app/web .

EXPOSE 3000

CMD ["./web"]
