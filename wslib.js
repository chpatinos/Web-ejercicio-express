const messageController = require("./controllers/message");
const WebSocket = require("ws");
const fs = require("fs");

const clients = [];
const messages = messageController.wsGetMessages;

const wsConnection = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    clients.push(ws);
    sendMessages();

    ws.on("message", (message) => {
      if (message.split(";")[0] == "client") messageController.wsCreateMessage({ message: message.split(";")[1], author: message.split(";")[2] });
      this.messages = messageController.wsGetMessages;
      sendMessages();
    });
  });

  const sendMessages = () => {
    clients.forEach((client) => client.send(JSON.stringify(messages)));
  };
};

exports.wsConnection = wsConnection;
