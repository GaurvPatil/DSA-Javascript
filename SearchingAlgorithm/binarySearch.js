function binarySearch(arr, target) {
    let low = 0;
   let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid;
      }
  
      if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1
  }
  
  
  console.log(binarySearch([11,22,33,44,55,66,77,88,99] , 77))
  