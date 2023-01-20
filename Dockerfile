FROM node:18 as node
WORKDIR /app
COPY ./site/ ./site/
RUN corepack enable
RUN cd site && pnpm install && pnpm run build

FROM golang:1.19-alpine as go
WORKDIR /app
COPY ./go.mod ./go.sum ./main.go ./
RUN go build .

FROM alpine:3.17
WORKDIR /app
COPY --from=node /app/dist/ ./dist/
COPY --from=go /app/web .

EXPOSE 3000

CMD ["./web"]
