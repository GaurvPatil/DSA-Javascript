class MyQueue {
    
    constructor(){
    this.front = 0;
    this.rear = 0;
    this.arr = new Array(100005);
  }
  
   push(x) {
    if (this.rear === 100005) return;
   
    this.arr[this.rear++] = x;
  }
  
  // Function to pop an element from the queue and return that element.
  pop() {
    if (this.front >= this.rear) return -1;
    return this.arr[this.front++];
  }
  }
  
  
  const myQueue = new MyQueue();
  myQueue.push(22);
  myQueue.pop();
  console.log(myQueue.pop());
  myQueue.pop();
  myQueue.pop();
  console.log(myQueue);
  
  