class Hobbit {
  constructor(hobbitCreature) {
    this.name = hobbitCreature.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }
  celebrateBirthday() {
    this.age++
  }
  timeTravel(edad, hobbit) {
    /* I need to create an if statement in order to modified
    the property adult, using the age propertie as the assigner
    also rememeber that timeTravel funcion has two arguments*/
    // this.age = edad;
    this.age = edad;
    if (edad >= 33 ) {
      this.adult = true;
    } else if (edad > 101) {
      this.old = true;
    }
  }
  getRing() {
    if (this.hasRing) {
      return 'Here is the ring!';
    } else {
      return 'You can\'t have it!';
    }
  }
}

module.exports = Hobbit;
