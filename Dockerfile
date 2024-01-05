FROM --platform=linux/amd64 node:15.8.0-alpine3.10 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
COPY . ./
RUN npm run build

FROM nginx:1.23-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]