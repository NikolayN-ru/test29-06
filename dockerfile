FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build