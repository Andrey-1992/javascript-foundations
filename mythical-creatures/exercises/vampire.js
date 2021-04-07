class Vampire {
  constructor(nombre, pet) {
      this.name = nombre;
      this.pet = pet;
      if (!pet) {
        this.pet = "bat";
        }
      this.thirsty = true;
      this.ouncesDrank = 0;
  }
  drink() {
    // console.log(oucesDrank);
    this.thirsty = false;
    if (this.ouncesDrank !== 60) {
      this.ouncesDrank += 10;
    } else {
      this.ouncesDrank -= 10;
    }
    // if the vampire drank more than 50 ounces,
    // instead of adding 10 we need to rest 10
  }
}

module.exports = Vampire;
