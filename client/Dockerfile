FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./

RUN yarn install

COPY ./ .

RUN npm run build

RUN yarn global add serve

EXPOSE 5000

CMD [ "serve", "-s", "build"]