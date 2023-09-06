// Recursive Binary Search

function RBinarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
      return -1;
    }
  
    if (low === high) {
      if (low === target) return low;
    } else {
        let mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        return RBinarySearch(arr, target, mid + 1, high);
      } else {
        return RBinarySearch(arr, target, low, mid - 1);
      }
    }
  }
  
  
  const sortedArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  const targetElement = 77;
  const result = RBinarySearch(sortedArray, targetElement);
  console.log(result)