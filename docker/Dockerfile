FROM node:13 as node

WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=node /app/dist/hero /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

