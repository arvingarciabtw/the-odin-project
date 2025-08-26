class Ship {
  constructor(length, hitCount) {
    this.length = length;
    this.hitCount = hitCount;
    this.isSunken = false;
  }

  hit() {
    this.hitCount += 1;
  }

  isSunk() {
    if (this.hitCount === this.length) {
      this.isSunken = true;
      // return this.isSunken;
    }
    return this.isSunken;
  }
}

export { Ship };
