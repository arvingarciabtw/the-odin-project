class Ship {
  constructor(length, hitCount = 0) {
    this.length = length;
    this.hitCount = hitCount;
    this.isSunken = false;
  }

  hit() {
    this.hitCount === this.length ? null : (this.hitCount += 1);
  }

  isSunk() {
    this.hitCount === this.length ? (this.isSunken = true) : this.isSunken;
  }
}

export { Ship };
