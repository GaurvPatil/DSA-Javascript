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
  
  
  
  
    deleteNode(x){
      if(x===1){
          return this.head.next
      }
      
      let current = this.head;
      let prev = null;
      let count = 1;
      
      while(current !==null && count < x){
          prev = current;
          current = current.next;
          count++
      }
      
      if(current === null){
          return this.head
      }
      prev.next = current.next
      return this.head;
   }
  
    
  }
  
  let myLinkedList = new LinkedList(17);
  myLinkedList.push(77);
  myLinkedList.push(88);
  myLinkedList.push(99);
  
  console.log(myLinkedList.deleteNode(2));
  