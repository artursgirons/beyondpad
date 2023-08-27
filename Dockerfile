#syntax=docker/dockerfile:1.4
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --link package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps --link /app/node_modules ./node_modules
COPY --link  . .

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN \
  addgroup --system --gid 1001 nodejs; \
  adduser --system --uid 1001 app
COPY --from=builder --link --chown=1001:1001 /app ./
USER app

EXPOSE 27802

ENV PORT 27802
ENV NODE_OPTIONS --openssl-legacy-provider

CMD ["node", "server.js"]