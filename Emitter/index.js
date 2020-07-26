const Emitter = require("./emitter");
let listen = new Emitter();
listen.on("save", () => {
  console.log("Saved 1");
});
listen.on("save", () => {
  console.log("Saved 2");
});
listen.emit("save");
