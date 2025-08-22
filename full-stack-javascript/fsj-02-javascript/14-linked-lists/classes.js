class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;

    while (current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;

    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    if (index < 0) return null;

    let current = this.headNode;
    let currentIndex = 0;

    while (current && currentIndex < index) {
      current = current.nextNode;
      currentIndex++;
    }

    return current;
  }

  pop() {
    if (!this.headNode) return null;

    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }

    let current = this.headNode;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
  }

  contains(value) {
    let current = this.headNode;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    if (!this.headNode) return "null";

    let result = "";
    let current = this.headNode;

    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += "null";
    return result;
  }
}

export { LinkedList };
