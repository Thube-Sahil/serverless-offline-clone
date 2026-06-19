const HttpServer =
  require("./http/HttpServer");

const LambdaServer =
  require("./lambda/LambdaServer");

const WebSocketServer =
  require("./websocket/WebSocketServer");

(async () => {

  const httpServer =
    new HttpServer();

  const lambdaServer =
    new LambdaServer();

  const webSocketServer =
    new WebSocketServer();

  await httpServer.start();
  await lambdaServer.start();
  await webSocketServer.start();

})();
