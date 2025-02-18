ARG NODE_VERSION=22.12
ARG PROJECT
ARG PROJECT_SLUG

# Alpine image
FROM node:${NODE_VERSION}-alpine AS alpine
RUN apk update
RUN apk add --no-cache libc6-compat openssl

# Setup pnpm and turbo on the alpine base
FROM alpine as base
RUN yarn global add turbo@^2.1.1 pnpm@^9.7.1
RUN pnpm config set store-dir ~/.pnpm-store

# Prune projects
FROM base AS pruner
ARG PROJECT

WORKDIR /app
COPY . .
RUN turbo prune --scope=${PROJECT} --docker

# Build the project
FROM base AS builder
ARG PROJECT

WORKDIR /app

# Copy lockfile and package.json's of isolated subworkspace
# Loading the .env file is required for the build
COPY --from=pruner /app/out/pnpm-*.yaml /app/.env ./
# Prisma is required for running the generate command during postinstall
COPY --from=pruner /app/out/full/packages/db ./packages/db
COPY --from=pruner /app/out/json/ .
# First install the dependencies (as they change less often)
RUN --mount=type=cache,id=pnpm,target=~/.pnpm-store pnpm install --frozen-lockfile

# Copy source code of isolated subworkspace
COPY --from=pruner /app/out/full/ .

RUN turbo build --filter=${PROJECT}
RUN --mount=type=cache,id=pnpm,target=~/.pnpm-store pnpm prune --prod --no-optional
RUN rm -rf ./**/*/src

# Final image
FROM base AS runner
ARG PROJECT_SLUG

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

WORKDIR /final
# COPY --from=builder --chown=nextjs:nodejs /app .
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder /app/packages/db ./packages/db
COPY --from=builder /app/pnpm-*.yaml /app/turbo.json /app/.env ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/${PROJECT_SLUG}/.next/standalone .
COPY --from=builder --chown=nextjs:nodejs /app/apps/${PROJECT_SLUG}/.next/static ./apps/${PROJECT_SLUG}/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/${PROJECT_SLUG}/public ./apps/${PROJECT_SLUG}/public

ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}
ENV PROJECT_SLUG=${PROJECT_SLUG}

# we dont apply pnpm db:deploy because it depends on other turbo tasks
CMD pnpm -F db run deploy && pnpm exec dotenv -e .env -- node /final/apps/${PROJECT_SLUG}/server.js