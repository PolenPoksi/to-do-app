FROM node:12.16.3-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ /app/
RUN npm run build


FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html
# Containers run nginx with global directives and daemon off

ENTRYPOINT ["nginx", "-g", "daemon off;"]