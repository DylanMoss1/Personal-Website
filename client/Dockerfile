FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./

RUN yarn install

COPY ./ .

RUN npm run build

RUN npm install -g serve

EXPOSE 5000
EXPOSE 3000

CMD [ "serve", "-p", "5000", "-s", "build"]