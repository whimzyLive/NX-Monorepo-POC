FROM node:14.16.1
WORKDIR /app

COPY ../../dist/apps/apis/nest-app .

ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production

CMD [ "node", "main.js" ]