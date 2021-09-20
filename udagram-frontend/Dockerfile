FROM beevelop/ionic:latest AS ionic

WORKDIR /usr/src/app

COPY udagram-frontend/package*.json ./
RUN npm ci

COPY udagram-frontend/ ./

RUN ionic build

FROM nginx:alpine
COPY --from=ionic /usr/src/app/www /usr/share/nginx/html