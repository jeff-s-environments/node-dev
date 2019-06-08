FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]
