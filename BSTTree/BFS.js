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
  
    BFS() {
      let currentNode = this.root;
      let results = [];
      let queue = [];
      queue.push(currentNode);
  
      while (queue.length) {
        currentNode = queue.shift();
        results.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
      return results;
    }
  
  
    
  }
  
  const myBST = new BST();
  myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);
  console.log(myBST)
  
  console.log(myBST.BFS());
  