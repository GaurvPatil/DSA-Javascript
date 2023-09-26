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
  
  console.log(createHeap([12, 11, 13, 5, 6, 14]));
  