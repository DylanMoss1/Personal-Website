FROM node:14-slim

WORKDIR /usr/src/client

COPY client/package.json ./

RUN yarn install

COPY client/ .

RUN npm run build

WORKDIR /usr/src/server

COPY server/package.json ./

RUN yarn install

COPY ./server .

EXPOSE 4000

CMD ["node", "index"]