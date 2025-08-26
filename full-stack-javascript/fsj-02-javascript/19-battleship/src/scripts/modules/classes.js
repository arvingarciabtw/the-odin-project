class Ship {
  constructor(length, hitCount = 0) {
    this.length = length;
    this.hitCount = hitCount;
    this.isSunken = false;
  }

  hit() {
    if (this.hitCount < this.length) {
      this.hitCount += 1;
      this.hitCount === this.length ? this.isSunk() : null;
    }
  }

  isSunk() {
    this.hitCount === this.length ? (this.isSunken = true) : this.isSunken;
  }
}

export { Ship };
