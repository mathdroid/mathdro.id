FROM node:24-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
ENV DB_PATH=/app/data/drawing.db
VOLUME /app/data
EXPOSE 3000
CMD ["npm", "start"]
