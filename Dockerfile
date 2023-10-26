FROM node:lts AS builder

WORKDIR /site

COPY . .

RUN npm install && npm run build

FROM nginx

COPY nginx.config /etc/nginx/nginx.conf
COPY --from=builder /site/dist/auth-demo/ /usr/share/nginx/html/

