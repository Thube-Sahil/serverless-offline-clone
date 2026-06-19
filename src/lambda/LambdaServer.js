const Hapi = require("@hapi/hapi");

const LambdaFunction =
  require("./LambdaFunction");

const LambdaContext =
  require("./LambdaContext");

class LambdaServer {

  async start() {

    const server = Hapi.server({
      port: 3002,
      host: "0.0.0.0"
    });

    server.route({
      method: "POST",
      path: "/2015-03-31/functions/{name}/invocations",

      handler: async (request) => {

        const functionName =
          request.params.name;

        const lambda =
          new LambdaFunction(
            "../../examples/http-api/handlers/hello"
          );

        const context =
          new LambdaContext(
            functionName
          );

        const result =
          await lambda.invoke(
            request.payload,
            context
          );

        return result;

      }
    });

    await server.start();

    console.log(
      "Lambda Server running on",
      server.info.uri
    );
  }
}

module.exports = LambdaServer;
