FROM node:14

WORKDIR /app

RUN npm install

COPY . .

# ENV APPLICATION_INSTANCE=example

EXPOSE 8080

CMD ["node", "src/count-server.js"]