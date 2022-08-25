# Dockerfile
FROM node:18-alpine

RUN apk add --no-cache libc6-compat

# create destination directory
RUN mkdir -p /usr/src/nuxt-app

WORKDIR /usr/src/nuxt-app
COPY package.json pnpm-lock.yaml .npmrc ./
RUN corepack enable 
RUN corepack prepare pnpm@7.9.5 --activate
RUN pnpm install --shamefully-hoist

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN pnpm install
RUN pnpm build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["pnpm", "start"]
LABEL org.opencontainers.image.source https://github.com/Lucxjo/ludoviko.xyz
