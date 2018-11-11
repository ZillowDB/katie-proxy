FROM node:8-alpine
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8078
CMD [ "node", "server.js" ]