FROM node:lts-alpine as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @vue/cli

COPY . /app

CMD ["npm", "run", "serve"]
