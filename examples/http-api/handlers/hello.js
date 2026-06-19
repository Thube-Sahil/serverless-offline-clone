module.exports.handler = async (event, context) => {

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda",
      path: event.path,
      method: event.httpMethod
    })
  };

};
