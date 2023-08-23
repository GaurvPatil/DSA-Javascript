class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) return false;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

const myBST = new BST();
myBST.insert(22);
myBST.insert(18);
myBST.insert(10);
myBST.insert(20);
myBST.insert(30);
myBST.insert(25);
myBST.insert(34);

console.log(myBST.contains(5));
console.log(myBST.minValueNode(myBST.root));
console.log(myBST.minValueNode(myBST.root.right));

