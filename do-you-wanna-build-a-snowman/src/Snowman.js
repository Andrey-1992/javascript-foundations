class Snowman {
  constructor(snowmanFeatures) {
    this.carrots = snowmanFeatures.carrots,
    this.coal = snowmanFeatures.coal;
    this.buttons = snowmanFeatures.buttons;
    this.snowballs = snowmanFeatures.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if (this.coal >= 2 && this.buttons >= 5) {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;
