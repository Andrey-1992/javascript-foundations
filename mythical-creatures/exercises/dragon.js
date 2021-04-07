class Dragon {
  constructor(nombre, jinete) {
    this.name = nombre,
    this.rider = jinete,
    this.hungry = true,
    this.counter = 0
  }
  greet() {
    return "Hi, "  + this.rider + "!";
  }
  eat() {
    this.counter ++ // The ++ incrementor can be used without a loop, so everytime
    // that we call the function eat() it add one to the counter variable.
    if (this.counter === 3) {
    this.hungry = false;
    }
  }
};

module.exports = Dragon;
