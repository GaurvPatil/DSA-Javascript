function  reverseInGroups(arr, n, k) {
    let newArr = [];
    console.log(arr);
    for (let i = 0; i < n; i += k) {
        let start = i;
        let end = Math.min(i + k, n);
        let subArray = arr.slice(start, end).reverse();
        console.log(arr);
        newArr.push(...subArray);
    }

    return newArr;
}

reverseInGroups([1,2,3,4,5], 5 , 3)