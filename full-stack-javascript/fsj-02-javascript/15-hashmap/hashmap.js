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

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.size--;

        if (bucket.length === 0) {
          this.buckets[index] = undefined;
        }

        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity);
    this.size = 0;
  }

  keys() {
    const keysArray = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let node of bucket) {
          keysArray.push(node.key);
        }
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let node of bucket) {
          valuesArray.push(node.value);
        }
      }
    }

    return valuesArray;
  }

  entries() {
    const entriesArray = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let node of bucket) {
          entriesArray.push([node.key, node.value]);
        }
      }
    }

    return entriesArray;
  }

  _inspect() {
    console.log(
      `Capacity: ${this.capacity}, Size: ${this.size}, Load: ${(this.size / this.capacity).toFixed(3)}`,
    );
    console.log(
      "Buckets:",
      this.buckets
        .map((bucket, i) =>
          bucket ? `${i}: [${bucket.map((n) => n.key).join(", ")}]` : null,
        )
        .filter((x) => x),
    );
  }
}

export { HashMap };
