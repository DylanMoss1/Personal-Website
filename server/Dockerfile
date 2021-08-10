FROM node:14-slim

WORKDIR /usr/src/server

COPY ./package.json ./

RUN yarn install

RUN npm install nodemailer

COPY ./ .

EXPOSE 4000

CMD ["node", "index"]