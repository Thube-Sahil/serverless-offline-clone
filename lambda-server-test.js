const LambdaServer =
  require("./src/lambda/LambdaServer");

const server =
  new LambdaServer();

server.start();
