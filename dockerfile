FROM node:16-alpine AS build
WORKDIR /build
COPY . .
RUN npm install --force
RUN npm run build

FROM node:18 AS app
WORKDIR /app
RUN npm install -g http-server@0.9.0 --force
COPY --from=build /build/dist .
EXPOSE 8080
CMD ["http-server"]