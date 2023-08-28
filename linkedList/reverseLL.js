class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class linkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
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
  
      return this;
    }
  
    reverse() {
      let previous = null;
      let next = null;
      this.tail = this.head;
  
      while (this.head !== null) {
          next = this.head.next;
          this.head.next = previous;
          previous = this.head;
          this.head = next;
      }
  
  
      this.head = previous; // Set the head to the last node
      return this;
    }
  }
  
  const myLinkedList = new linkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);
  
  
  console.log(myLinkedList.reverse())