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

  height(value) {
    const node = this.find(value);
    if (node === null) {
      return null;
    }
    return this._heightRec(node);
  }

  _heightRec(node) {
    if (node === null) {
      return -1;
    }

    const leftHeight = this._heightRec(node.left);
    const rightHeight = this._heightRec(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(value) {
    return this._depthRec(this.root, value, 0);
  }

  _depthRec(node, value, currentDepth) {
    if (node === null) {
      return null;
    }

    if (node.data === value) {
      return currentDepth;
    }

    if (value < node.data) {
      return this._depthRec(node.left, value, currentDepth + 1);
    } else {
      return this._depthRec(node.right, value, currentDepth + 1);
    }
  }

  isBalanced() {
    return this._isBalancedRec(this.root) !== -1;
  }

  _isBalancedRec(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = this._isBalancedRec(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = this._isBalancedRec(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  rebalance() {
    const values = [];
    this.inOrderForEach((node) => values.push(node.data));
    this.root = this.buildTree(values);
  }
}

function generateRandomArray(size, max = 100) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * max));
  }
  return array;
}

function driverScript() {
  console.log("=== Binary Search Tree Driver Script ===\n");

  console.log("1. Creating BST from random numbers < 100...");
  const randomArray = generateRandomArray(15, 100);
  console.log("Random array:", randomArray);

  const bst = new Tree(randomArray);
  console.log("\nInitial BST:");
  bst.prettyPrint();

  console.log("\n2. Checking if tree is balanced...");
  console.log("Is balanced:", bst.isBalanced());

  console.log("\n3. Tree traversals:");

  const levelOrder = [];
  const preOrder = [];
  const postOrder = [];
  const inOrder = [];

  bst.levelOrderForEach((node) => levelOrder.push(node.data));
  bst.preOrderForEach((node) => preOrder.push(node.data));
  bst.postOrderForEach((node) => postOrder.push(node.data));
  bst.inOrderForEach((node) => inOrder.push(node.data));

  console.log("Level order:", levelOrder);
  console.log("Pre order:", preOrder);
  console.log("Post order:", postOrder);
  console.log("In order:", inOrder);

  console.log("\n4. Unbalancing tree by adding numbers > 100...");
  const largeNumbers = [101, 102, 103, 104, 105, 106, 107];
  largeNumbers.forEach((num) => bst.insert(num));

  console.log("\nUnbalanced BST:");
  bst.prettyPrint();

  console.log("\n5. Checking if tree is balanced...");
  console.log("Is balanced:", bst.isBalanced());

  console.log("\n6. Rebalancing tree...");
  bst.rebalance();

  console.log("\nRebalanced BST:");
  bst.prettyPrint();

  console.log("\n7. Checking if tree is balanced...");
  console.log("Is balanced:", bst.isBalanced());

  console.log("\n8. Tree traversals after rebalancing:");

  levelOrder.length = 0;
  preOrder.length = 0;
  postOrder.length = 0;
  inOrder.length = 0;

  bst.levelOrderForEach((node) => levelOrder.push(node.data));
  bst.preOrderForEach((node) => preOrder.push(node.data));
  bst.postOrderForEach((node) => postOrder.push(node.data));
  bst.inOrderForEach((node) => inOrder.push(node.data));

  console.log("Level order:", levelOrder);
  console.log("Pre order:", preOrder);
  console.log("Post order:", postOrder);
  console.log("In order:", inOrder);

  console.log("\n=== Additional Method Demonstrations ===");

  console.log("\nFind operations:");
  console.log("Find 5:", bst.find(5));
  console.log("Find 999:", bst.find(999));

  console.log("\nHeight and depth operations:");
  const testValue = inOrder[Math.floor(inOrder.length / 2)];
  console.log(`Height of ${testValue}:`, bst.height(testValue));
  console.log(`Depth of ${testValue}:`, bst.depth(testValue));

  console.log("\nDelete operations:");
  console.log("Before deletion:");
  bst.prettyPrint();

  bst.deleteItem(testValue);
  console.log(`After deleting ${testValue}:`);
  bst.prettyPrint();
}

driverScript();
