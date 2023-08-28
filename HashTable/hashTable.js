class hashTable {
    constructor(size = 7) {
      this.dataMap = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
      }
      return hash;
    }
  
    set(key, value) {
      let index = this._hash(key);
      if (!this.dataMap[index]) {
        this.dataMap[index] = [];
      }
      this.dataMap[index].push([key, value]);
      return this;
    }
  
    get(key) {
      let index = this._hash(key);
  
      if (!this.dataMap[index]) return false;
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
  
    keys(){
      let allKeys = [];
      for(let i = 0 ; i<this.dataMap.length; i++){
        if(this.dataMap[i]){
          for(let j = 0 ; j<this.dataMap[i].length ; j++){
            allKeys.push(this.dataMap[i][j][0])
          }
        }
      }
      return allKeys
    }
  }
  
  // crate HashTable
  const myHashTable = new hashTable();
  
  // set Method
  console.log(myHashTable.set("Nails", 100));
  console.log(myHashTable.set("Screws", 1000));
  console.log(myHashTable.set("Chains", 200));
  console.log(myHashTable.set("Panas", 200));
  console.log(myHashTable.set("Bolts", 200));
  console.log(myHashTable.set("Hammer", 200));
  console.log(myHashTable.set("Mof", 200));
  console.log(myHashTable.set("Carpet", 200));
  
  // get Method
  console.log(myHashTable.get("Mof"));
  console.log(myHashTable.get("suspensions"));
  
  // get all Keys 
  console.log(myHashTable.keys());
  
  
  