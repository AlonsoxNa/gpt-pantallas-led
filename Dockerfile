FROM node:20.11-alpine as builder

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --silent
FROM nginx:1.25.3-alpine
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80