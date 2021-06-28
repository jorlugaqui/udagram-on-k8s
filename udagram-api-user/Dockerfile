FROM node:13

ENV NODE_ENV ${NODE_ENV}

WORKDIR /app

COPY udagram-api-user/package*.json ./
COPY udagram-api-user/tsconfig.json ./

RUN npm install

COPY udagram-api-user/ ./

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "prod"]