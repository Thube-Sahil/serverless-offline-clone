const AuthorizerRunner =
  require("../authorizer/AuthorizerRunner");

const Hapi = require("@hapi/hapi");

const HttpEventBuilder =
  require("./HttpEventBuilder");

const LambdaFunction =
  require("../lambda/LambdaFunction");

const LambdaContext =
  require("../lambda/LambdaContext");

class HttpServer {

  async start() {

    const server = Hapi.server({
      port: 3000,
      host: "0.0.0.0"
    });

    server.route({
      method: "GET",
      path: "/hello",

      handler: async (request) => {

        const authorizer =
          new AuthorizerRunner();

        const authResult =
          authorizer.authorize(
            request.headers.authorization
          );

        if (!authResult.authorized) {
          return {
            statusCode: 401,
            message: "Unauthorized"
          };
        }

        const builder =
          new HttpEventBuilder();

        const event =
          builder.build({
            method: request.method.toUpperCase(),
            path: request.path,
            headers: request.headers,
            query: request.query
          });

        const context =
          new LambdaContext("hello");

        const lambda =
          new LambdaFunction(
            "../../examples/http-api/handlers/hello"
          );

        const result =
          await lambda.invoke(
            event,
            context
          );

        return JSON.parse(result.body);

      }
    });

    await server.start();

    console.log(
      "HTTP Server running on",
      server.info.uri
    );
  }
}

module.exports = HttpServer;
