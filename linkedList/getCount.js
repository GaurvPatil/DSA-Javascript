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
  
    getCount() {
      let temp = this.head;
      let count = 0;
  
      while (temp !== null) {
        count++;
        temp = temp.next;
      }
      return count;
    }
  }
  
  let myLinkedList = new LinkedList(7);
  myLinkedList.push(88);
  
  console.log(myLinkedList.getCount());
  