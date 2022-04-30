docker build -t ghcr.io/lucxjo/ludo-web:$1 -t ghcr.io/lucxjo/ludo-web:latest .
docker push ghcr.io/lucxjo/ludo-web:$1
docker push ghcr.io/lucxjo/ludo-web:latest