var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(nombre) {
    this.name = nombre;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var statue = new Statue(victim.name)
    if (this.statues.length < 3){
    this.statues.push(statue);
    // console.log(this.statues)

  }
 }
}

module.exports = Medusa;
