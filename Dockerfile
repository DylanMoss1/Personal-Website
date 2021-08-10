FROM node:14-slim

WORKDIR /usr/src/server

COPY server/package.json ./

RUN yarn install

RUN npm install nodemailer

COPY ./server .

WORKDIR /usr/src/client

COPY client/package.json ./

RUN yarn install

COPY client/ .

RUN npm run build

RUN npm install -g serve

EXPOSE 4000

WORKDIR /usr/src/server

CMD ["node", "index"]