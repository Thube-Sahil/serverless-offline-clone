class AuthorizerRunner {

  authorize(token) {

    if (token === "allow") {
      return {
        authorized: true
      };
    }

    return {
      authorized: false
    };
  }
}

module.exports = AuthorizerRunner;
