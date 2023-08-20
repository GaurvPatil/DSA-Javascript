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
        // this.tail.next = this.head;
      }
      this.length++;
      return this;
    }
  
    isCircular() {
      if (this.head.next === null) return true;
  
      let node = this.head.next;
  
      while (node.next !== null && node.next !== this.head) {
        node = node.next;
      }
      return (node.next === this.head);
    }
  }
  
  let myLinkedList = new LinkedList(17);
  myLinkedList.push(77);
  myLinkedList.push(88);
  myLinkedList.push(99);
  console.log(myLinkedList);
  console.log(myLinkedList.isCircular());
  