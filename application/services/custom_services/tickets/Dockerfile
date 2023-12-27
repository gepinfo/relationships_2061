FROM node:20.2-alpine
COPY . /tickets
WORKDIR /tickets
RUN npm install
RUN npm i -g ts-node
CMD npm run prod