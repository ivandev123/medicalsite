FROM node:14

WORKDIR /opt/app

COPY . .

RUN npm install

EXPOSE 80

CMD [ "npm", "run", "serve"]
