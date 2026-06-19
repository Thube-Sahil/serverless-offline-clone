const LambdaFunction =
  require("./src/lambda/LambdaFunction");

const LambdaContext =
  require("./src/lambda/LambdaContext");

async function run() {

  const fn =
    new LambdaFunction(
      "../../examples/http-api/handlers/hello"
    );

  const context =
    new LambdaContext("hello");

  const result =
    await fn.invoke(
      {},
      context
    );

  console.log(result);

}

run();
