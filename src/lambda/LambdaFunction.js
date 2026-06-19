class LambdaFunction {

  constructor(handlerPath) {
    this.handlerPath = handlerPath;
  }

  async invoke(event, context) {

    const lambdaModule =
      require(this.handlerPath);

    return await lambdaModule.handler(
      event,
      context
    );

  }

}

module.exports = LambdaFunction;
