FROM --platform=linux/amd64 node:18 AS base
WORKDIR /app

COPY package.json yarn.lock ./

FROM base AS prod-deps
RUN yarn install --production=true

FROM base AS build-deps
RUN yarn install --production=false

FROM build-deps AS build
COPY . .
RUN yarn build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080
CMD node ./dist/server/entry.mjs
