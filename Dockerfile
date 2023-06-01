FROM node:16.20-alpine3.16
RUN apk add --update \
    curl \
    && rm -rf /var/cache/apk/*
COPY package.json       /app/
COPY package-lock.json  /app/
COPY html-static/       /app/html-static/
COPY flows.json         /app/
COPY flows_cred.json    /app/
COPY settings.js        /app/
WORKDIR /app
ENV MQTTCLIENTID=blinky-lite-box
ENV MQTTSERVERIP=blinky-box-docker-mosquitto-1
ENV MQTTUSERNAME=blinky-lite
ENV BOX=blinky-lite-box
ENV SUBSCRIBETOPIC="blinky-lite-box/+/+/#"
ENV IPREFWEB="https://www.blinky-lite.se"
ENV NODEREDLABEL=blinky-lite-box
ENV ENABLE_NODERED_EDITOR=0
ENV NODEREDPORT=60427
RUN npm install
CMD ["sh", "-c", "exec node --max-old-space-size=384 node_modules/node-red/red.js -s ./settings.js -u ./"]