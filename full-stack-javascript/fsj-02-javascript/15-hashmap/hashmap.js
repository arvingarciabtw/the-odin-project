class HashMap {
  constructor(loadFactor = 0.75) {
    this.capacity = 16;
    this.loadFactor = loadFactor;
    this.size = 0;
    this.buckets = new Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.size = 0;
    this.buckets = new Array(this.capacity);

    for (let bucket of oldBuckets) {
      if (bucket) {
        for (let node of bucket) {
          this.set(node.key, node.value);
        }
      }
    }
  }

}
