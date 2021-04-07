class Skier {
  constructor(skierName) {
    this.name = skierName;
    this.hasLiftTicket = true;
    this.skillLevel = 1;
    this.nextSlope = slope;
  }
  takeLesson() {
    this.skillLevel++
  }
  pickSlope(slope) {
  
    this.nextSlope = 'blue square';
    // need to update nextSlope
    // use parameter in pick slope method that will equal this.nextSlope
    // use a conditional statement to decide which slope should be assigned

  }
}

module.exports = Skier;
