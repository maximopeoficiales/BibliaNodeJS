class Ejemplo {
  saludar(name) {
    console.log(`Hola ${name}`);
  }
}

module.exports = Ejemplo;
/* export { Ejemplo }; */
/* para hacer el export en node js es necesario modificar el package.json y agregar como parametro el type: "module" */