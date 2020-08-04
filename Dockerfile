FROM node:11.1.0-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm i -g npx nodemon
RUN npm i
CMD ["npm", "run", "dev"]
