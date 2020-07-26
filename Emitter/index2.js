/* El eventEmmitter hace casi lo mismo que lo que hemos creado    */
const { EventEmitter } = require("events");
const { SAVE } = require("./event-names");
let listen = new EventEmitter();
listen.on(SAVE, () => {
  console.log("Saved 1");
});
listen.on(SAVE, () => {
  console.log("Saved 2");
});
listen.emit(SAVE);
