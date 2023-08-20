
class Node {
    constructor(value){
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  
  
  
  class DoublyLinkedList {
  
  constructor(value){
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
  
  }
  
  
  push(value){
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
  
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  
  getCount(){
    let count = 0;
    let current = this.head
    while(current !== null){
        count++;
        current = current.next
    }
    return count;
  }
    
    getIndex(index){
  
      
        const count = this.getCount();
        if(index < 1 || index > count ) return undefined;
        
        let temp = this.head;
        for(let i = 1 ; i< index ; i++){
  
          console.log( "i = " ,i , "temp = " , temp)
            temp = temp.next;
          
        }
        
  
        return temp
        
    }
    
   deleteNode( x) {
        const indexNode = this.getIndex(x);
        console.log(indexNode , "indexNode")
        if (!indexNode) return this;
  
        let prevNode = indexNode.prev;
        let nextNode = indexNode.next;
  
        if (prevNode) prevNode.next = indexNode.next;
        if (nextNode) nextNode.prev = indexNode.prev;
  
        // Additional check for last node
        if (!nextNode) {
            if (prevNode) {
                prevNode.next = null;
                this.tail = prevNode;
            } else {
              this.head = null;
            }
        }
  
        indexNode.prev = null;
        indexNode.next = null;
        return this;
    }
  }
  
  const myDoublyLinkedList = new DoublyLinkedList(1);
  myDoublyLinkedList.push(2);
  myDoublyLinkedList.push(3);
  myDoublyLinkedList.push(4);
  myDoublyLinkedList.deleteNode(4); 
  console.log(myDoublyLinkedList);