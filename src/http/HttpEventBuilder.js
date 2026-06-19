class HttpEventBuilder {

  build(request) {

    return {
      httpMethod: request.method,
      path: request.path,
      headers: request.headers || {},
      queryStringParameters:
        request.query || {}
    };

  }

}

module.exports = HttpEventBuilder;
