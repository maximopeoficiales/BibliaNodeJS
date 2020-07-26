class Emitter {
  constructor() {
    this.events = {};
  }
  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }
  emit(type) {
    /* compara el tipo de dato */
    if (this.events[type]) {
      this.events[type].forEach((listener) => listener());
    }
  }
}
module.exports = Emitter;
