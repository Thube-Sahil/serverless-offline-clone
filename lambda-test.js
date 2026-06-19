const LambdaContext = require("./src/lambda/LambdaContext");

const context = new LambdaContext("hello");

console.log("Function Name:", context.functionName);

console.log("Request ID:", context.awsRequestId);

console.log(
  "Remaining Time:",
  context.getRemainingTimeInMillis()
);
