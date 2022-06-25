# Install dependencies only when needed
FROM node:18-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./
RUN corepack enable 
RUN corepack prepare pnpm@7.3.0 --activate
RUN pnpm install --shamefully-hoist

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
ENV NPM_TOKEN=${NPM_TOKEN}
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN corepack enable 
RUN corepack prepare pnpm@7.3.0 --activate
RUN pnpm install && pnpm build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/.output ./

EXPOSE 3000

CMD ["node", "./server/index.mjs"]
LABEL org.opencontainers.image.source https://github.com/Lucxjo/ludoviko.xyz
