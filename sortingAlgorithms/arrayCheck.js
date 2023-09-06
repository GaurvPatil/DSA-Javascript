// function bubbleSort(arr){
//     for(let i = arr.length -1 ; i>0 ; i--){
//         for(let j = 0 ; j<i ; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }



// Expected Time Complexity : O(N)
// Expected Auxilliary Space : O(N)

function merge(arr1 , arr2){
    let combined = [];
    let i = 0 ;
    let j = 0 ;
    
    while(i< arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            combined.push(arr1[i]);
            i++
        }else{
            combined.push(arr2[j]);
            j++
        }
    }
    
    
    while(i< arr1.length){
        combined.push(arr1[i]);
        i++
    }
    
    while(j<arr2.length){
        combined.push(arr2[j]);
        j++
    }
    
    return combined;
    
}


function MergeSort(arr){
    if(arr.length === 1) return arr;
    
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0 , mid);
    let right = arr.slice(mid);
    
    return merge(MergeSort(left) , MergeSort(right))
    
}

class Solution {
    
    //Function to check if two arrays are equal or not.
    check(A,B,N){
        
        let arr1 = MergeSort(A);
        let arr2 = MergeSort(B);
        
        for(let i = 0 ; i<N ; i++){
           
            if(arr1[i] !== arr2[i]) return 0;
            
        }
        return 1
    }
    
}


const mySolution = new Solution();

console.log(mySolution.check([8,3,6,9,5] , [5,9,8,6,3] , 5))