const HttpEventBuilder =
  require("./src/http/HttpEventBuilder");

const builder =
  new HttpEventBuilder();

const event =
  builder.build({

    method: "GET",

    path: "/hello",

    headers: {
      host: "localhost"
    },

    query: {
      name: "Sahil"
    }

  });

console.log(event);
