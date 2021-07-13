# Use NodeJS base image
FROM node:13

ENV NODE_ENV ${NODE_ENV}

WORKDIR /app

COPY udagram-frontend/package*.json ./
RUN npm clean-install
RUN npm install -g ionic

COPY udagram-frontend/ ./

RUN ionic build

EXPOSE 8001