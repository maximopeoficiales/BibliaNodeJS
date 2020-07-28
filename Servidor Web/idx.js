/* requiero http */
const http = require("http");
const fs = require("fs");
const html = fs.readFileSync("./index.html");
const blog = fs.readFileSync("./blog.html");
/* creo server */
http
  .createServer((request, response) => {
    const { url } = request;
    if (url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
    } else if (url === "/blog") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(blog);
    }else{
      response.writeHead(400, { "Content-Type": "text/html" });
      response.write("Pagina no encontrada :C");
    }
    response.end();
  })
  .listen(3000);
