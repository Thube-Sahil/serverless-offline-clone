class LambdaContext {
  constructor(functionName) {
    this.functionName = functionName;
    this.awsRequestId = Date.now().toString();
    this.startTime = Date.now();
  }

  getRemainingTimeInMillis() {
    return 3000 - (Date.now() - this.startTime);
  }
}

module.exports = LambdaContext;

