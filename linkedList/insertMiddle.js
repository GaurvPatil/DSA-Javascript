class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  insertInMiddle(key) {
    const middleIndex = Math.floor(this.length / 2);
    if (!this.head) {
      this.push(key);
    } else {
      let node = this.head;
      for (let i = 1; i < middleIndex; i++) {
       
        node = node.next;
      }
      const newNode = new Node(key);

      newNode.next = node.next;
      node.next = newNode;
      this.length++;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(17);
myLinkedList.push(77);
myLinkedList.push(88);
myLinkedList.push(99);
console.log(myLinkedList.insertInMiddle(11));
