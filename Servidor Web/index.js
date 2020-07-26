/* requiero http */
const http = require("http");
/* creo server */
http
  .createServer((request, response) => {
    response.write("HOLA BRO");
    response.end();
  })
  .listen(3000);
