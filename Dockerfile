FROM node:8.11

WORKDIR /opt/app


RUN npm install

EXPOSE 80

CMD [ "npm", "run", "serve"]
