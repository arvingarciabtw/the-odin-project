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

  set(key, value) {
    if (this.size >= this.capacity * this.loadFactor) {
      this._resize();
    }

    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value;
        return; // Don't increment size for updates
      }
    }

    bucket.push({ key, value });
    this.size++;
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return null;

    for (let node of bucket) {
      if (node.key === key) {
        return node.value;
      }
    }

    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

}
