
function missingNumber(array, n) {
    const expectedSum  = ( n * (n+1)) /2;
    const actualSum = array.reduce((acc , num)=> acc+num , 0);
    return expectedSum - actualSum
  }
  
  console.log(missingNumber([1, 5, 3, 2,4,6,7], 8));
  // Missing number in array