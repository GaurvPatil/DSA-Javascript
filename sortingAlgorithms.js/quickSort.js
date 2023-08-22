function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }
  
  function Pivot(arr, pivotIndex = 0, endIndex = arr.length - 1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
      if (arr[i] < arr[pivotIndex]) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }
    swap(arr, pivotIndex, swapIndex);
    return swapIndex;
  }
  
  function quickSort(arr, left = 0, rigth = arr.length - 1) {
    if (left < rigth) {
      let pivotIndex = Pivot(arr, left, rigth);
      quickSort(arr, left, pivotIndex-1);
      quickSort(arr, pivotIndex + 1, rigth);
    }
    return arr;
  }
  
  
  console.log(quickSort([3,5,6,9,8]));