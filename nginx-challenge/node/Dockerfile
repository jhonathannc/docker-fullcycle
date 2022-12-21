FROM node:15

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]