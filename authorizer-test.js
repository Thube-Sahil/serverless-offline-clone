const AuthorizerRunner =
  require("./src/authorizer/AuthorizerRunner");

const auth =
  new AuthorizerRunner();

console.log(
  auth.authorize("allow")
);

console.log(
  auth.authorize("deny")
);
