FROM node:12.16.3-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
# COPY . .
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
# RUN npm run start