const express = require("express");
const { WebSocketServer } = require("ws");

const app = express();
const server = app.listen(4005);

const wss = new WebSocketServer({ server });

let clients = [];

wss.on("connection", (ws) => {
  clients.push(ws);

  ws.on("message", (msg) => {
    clients.forEach(c => c.send(msg));
  });
});

console.log("Notification service running 4005");