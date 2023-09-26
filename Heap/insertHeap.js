

function buildMaxHeap(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      Heap(arr, n, i);
    }
    return arr;
  }
  
  function Heap(arr, n, i) {
    let largest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      Heap(arr, n, largest);
    }
  }
  
  function insertIntoMaxHeap(arr, element) {
    arr.push(element);
  
    let currentIndex = arr.length - 1;
  
    while (currentIndex > 0) {
      const parentNode = Math.floor((currentIndex - 1) / 2);
      if (arr[currentIndex] > arr[parentNode]) {
        [arr[currentIndex], arr[parentNode]] = [
          arr[parentNode],
          arr[currentIndex],
        ];
        currentIndex = parentNode;
      } else {
        break;
      }
    }
  
    return arr;
  }
  
  let maxHeapArr = buildMaxHeap([12, 11, 13, 5, 6, 14]);
  insertIntoMaxHeap(maxHeapArr, 8);
  insertIntoMaxHeap(maxHeapArr, 20);
  
  console.log(maxHeapArr)
  
  