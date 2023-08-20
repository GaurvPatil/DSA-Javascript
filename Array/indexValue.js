
class Solution {
    valueEqualToIndex(arr, n) {
        let indexArr = [];
        arr.forEach((item, index) => {
            if (item === index + 1) {
                indexArr.push(index + 1);
            }
        });
        return indexArr;
    }
}
  const mySolution = new Solution();
  console.log(mySolution.valueEqualToIndex([1, 3, 5, 8, 5], 5));
  