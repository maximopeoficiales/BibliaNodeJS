const express = require("express"); //
const fs = require("fs");
/* instancia de express */
const server = express();
/* Cargar las vistas en variables */
const home = fs.readFileSync("./views/index.html");
const about = fs.readFileSync("./views/blog.html");

/* funcion */
function getHomePage(req, res) {
  return res.write(home);
}

/* Rutas */
server.get("/", getHomePage);
server.get("/about", (req, res) => {
  res.write(about);
});
server.listen(3000, () => {
  console.log("MI servidor funcionando");
});
