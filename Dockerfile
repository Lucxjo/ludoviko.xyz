# Dockerfile
FROM node:16-alpine

RUN apk add --no-cache libc6-compat

# create destination directory
RUN mkdir -p /usr/src/nuxt-app

WORKDIR /usr/src/nuxt-app
COPY package.json .npmrc ./
RUN yarn install

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN yarn install
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["yarn", "start"]
LABEL org.opencontainers.image.source https://github.com/Lucxjo/ludoviko.xyz
