FROM node:20.2-alpine
COPY . /types
WORKDIR /types
RUN npm install
RUN npm i -g ts-node
CMD npm run prod