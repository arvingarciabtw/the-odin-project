class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArray);
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);

    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));

    return node;
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value === node.data) {
      return node;
    }

    if (value < node.data) {
      node.left = this._insertRec(node.left, value);
    } else {
      node.right = this._insertRec(node.right, value);
    }

    return node;
  }

  deleteItem(value) {
    this.root = this._deleteRec(this.root, value);
  }

  _deleteRec(node, value) {
    if (node === null) {
      return node;
    }

    if (value < node.data) {
      node.left = this._deleteRec(node.left, value);
    } else if (value > node.data) {
      node.right = this._deleteRec(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }

      const successor = this._findMin(node.right);

      node.data = successor.data;

      node.right = this._deleteRec(node.right, successor.data);
    }

    return node;
  }

  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  find(value) {
    return this._findRec(this.root, value);
  }

  _findRec(node, value) {
    if (node === null || node.data === value) {
      return node;
    }

    if (value < node.data) {
      return this._findRec(node.left, value);
    } else {
      return this._findRec(node.right, value);
    }
  }

  levelOrderForEach(callback) {
    if (!callback) {
      throw new Error("Callback function is required");
    }

    if (this.root === null) return;

    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  inOrderForEach(callback) {
    if (!callback) {
      throw new Error("Callback function is required");
    }
    this._inOrderRec(this.root, callback);
  }

  _inOrderRec(node, callback) {
    if (node !== null) {
      this._inOrderRec(node.left, callback);
      callback(node);
      this._inOrderRec(node.right, callback);
    }
  }

  preOrderForEach(callback) {
    if (!callback) {
      throw new Error("Callback function is required");
    }
    this._preOrderRec(this.root, callback);
  }

  _preOrderRec(node, callback) {
    if (node !== null) {
      callback(node);
      this._preOrderRec(node.left, callback);
      this._preOrderRec(node.right, callback);
    }
  }

  postOrderForEach(callback) {
    if (!callback) {
      throw new Error("Callback function is required");
    }
    this._postOrderRec(this.root, callback);
  }

  _postOrderRec(node, callback) {
    if (node !== null) {
      this._postOrderRec(node.left, callback);
      this._postOrderRec(node.right, callback);
      callback(node);
    }
  }

}
