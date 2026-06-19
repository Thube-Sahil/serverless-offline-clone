const WebSocketServer =
  require("./src/websocket/WebSocketServer");

const server =
  new WebSocketServer();

server.start();

