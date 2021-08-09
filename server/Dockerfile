FROM node:14-slim

WORKDIR /usr/src/api

COPY ./package.json ./

RUN yarn install

COPY ./ .

EXPOSE 4000

CMD ["node", "index.js"]