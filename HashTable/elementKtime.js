function firstElementKTime(arr, n, k) {
    let countMap = {};
  
    for (let i = 0; i < n; i++) {
      let element = arr[i];
  
      if (countMap.hasOwnProperty(element)) {
        countMap[element]++;
      } else {
        countMap[element] = 1;
      }
  
      if (countMap[element] === k) {
        return element;
      }
    }
  
    return -1; // If no element occurs at least K times
  }


  firstElementKTime([1, 7, 4, 3, 4, 8, 7] , 7 , 2)