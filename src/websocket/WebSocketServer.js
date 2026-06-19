const WebSocket = require("ws");

class WebSocketServer {

  start() {

    const wss = new WebSocket.Server({
      port: 3001
    });

    wss.on("connection", (ws) => {

      console.log(
        "Client connected"
      );

      ws.send(
        "Welcome to WebSocket Server"
      );

      ws.on("message", (message) => {

        console.log(
          "Received:",
          message.toString()
        );

        ws.send(
          "Echo: " +
          message.toString()
        );

      });

    });

    console.log(
      "WebSocket Server running on ws://localhost:3001"
    );

  }
}

module.exports = WebSocketServer;
