function HeapSort(arr) {
    buildMaxHeap(arr);
  
    for (let i = arr.length - 1; i > 0; i--) [arr[0], arr[i]] = [arr[i], arr[0]];
  
    Heap(arr, i, 0);
    // n = i ;
    // i = 0 ;
  }
  
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
  
  console.log(HeapSort([12, 11, 13, 5, 6, 14]));
  