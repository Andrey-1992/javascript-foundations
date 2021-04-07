class GolfCourse {
  constructor(golfName, difficulty, golfOpenings) {
    this.name = golfName;
    this.difficulty = difficulty;
    this.openings = golfOpenings;
    this.features = .features
    // need to access the object propery .features
    console.log(this.features)
  }

}

module.exports = GolfCourse;
