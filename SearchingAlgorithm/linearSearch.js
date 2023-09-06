

function linearSearch(arr, target){

for(let i = 0 ; i<arr.length ; i++){
    if(arr[i] === target);
    return i
}
return false

}

console.log(linearSearch([1,2,5,4,7,8,9,6,5,4,8] , 6))