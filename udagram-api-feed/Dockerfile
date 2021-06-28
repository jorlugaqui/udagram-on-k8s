FROM node:13

ENV NODE_ENV ${NODE_ENV}

WORKDIR /app

COPY udagram-api-feed/package*.json ./
COPY udagram-api-feed/tsconfig.json ./

RUN npm install

COPY udagram-api-feed/ ./

RUN npm run build

EXPOSE 8081

CMD ["npm", "run", "prod"]