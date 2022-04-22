FROM node:12
WORKDIR /be
COPY package.json .
RUN npm install
COPY . .
CMD npm start