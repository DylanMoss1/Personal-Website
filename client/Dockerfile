FROM node:14-slim

WORKDIR /usr/src/client

COPY ./package.json ./

RUN yarn install

COPY ./ .

RUN npm run build

RUN npm install -g serve

EXPOSE 5000
EXPOSE 4000

CMD [ "serve", "-s", "build"]

#EXPOSE 3000

#CMD ["yarn", "start"]