# ponytail: node 16 because next 9 predates node 18; upgrade base image with the app
FROM node:16-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
