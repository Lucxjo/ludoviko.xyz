FROM node:latest as build
COPY package.json .

COPY package.json .yarn .yarnrc.yml ./

FROM node:14-alpine
ENV NPM_TOKEN=${NPM_TOKEN}
RUN npm install
COPY . .

EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "start"]
LABEL org.opencontainers.image.source https://github.com/Lucxjo/ludoviko.xyz