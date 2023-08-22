
function sort012(arr, N) {
    let low = 0;         // Pointer for 0s
    let high = N - 1;    // Pointer for 2s
    let mid = 0;         // Pointer for 1s

    while (mid <= high) {
        if (arr[mid] === 0) {
            // Swap arr[low] and arr[mid]
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            // Swap arr[mid] and arr[high]
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr
}
console.log(sort012([2,2,1,0,1,0,1,2] , 8));








// Dutch National Flag algorithm ===

// Certainly! The Dutch National Flag algorithm is an efficient sorting algorithm designed to sort an array containing three distinct values in a single pass. This algorithm is particularly useful for problems where the input array consists of a limited number of unique elements.

// The algorithm is named after the Dutch national flag, which consists of three horizontal stripes: red, white, and blue. Similarly, the algorithm sorts an array into three partitions corresponding to the three unique values.

// Here's how the algorithm works in detail:

// 1. **Initialize Pointers:**
//    - `low` points to the position where the next 0 should be placed.
//    - `mid` points to the current position being considered.
//    - `high` points to the position where the next 2 should be placed.

// 2. **Loop Through the Array:**
//    - The loop continues while `mid` is less than or equal to `high`. This ensures that all elements are processed.

// 3. **Case 1: Value at `arr[mid]` is 0:**
//    - Swap the element at `arr[low]` with the element at `arr[mid]`.
//    - Increment both `low` and `mid`. This effectively places the current 0 at its correct position and advances the pointers.

// 4. **Case 2: Value at `arr[mid]` is 1:**
//    - Increment only the `mid` pointer.
//    - Since the 1s should be in the middle partition, no swapping is required.

// 5. **Case 3: Value at `arr[mid]` is 2:**
//    - Swap the element at `arr[mid]` with the element at `arr[high]`.
//    - Decrement `high`. This effectively places the current 2 at its correct position and reduces the range of unprocessed elements.

// 6. **Repeat the Process:**
//    - Continue these steps until `mid` becomes greater than `high`. At this point, all elements have been processed.

// The algorithm works on the principle that by swapping 0s to the left and 2s to the right, the 1s will automatically be positioned in the middle, resulting in a sorted array.

// The Dutch National Flag algorithm is efficient because it requires only a single pass through the array, and each element is processed exactly once. This leads to a linear time complexity of O(N), making it faster than traditional comparison-based sorting algorithms for arrays with a limited number of distinct values.

// The algorithm's name and concept come from a historical event in the Netherlands involving the flag, and it has found applications in various fields beyond sorting, including computer science and computer graphics.


// example =

// Certainly! Let's walk through the algorithm step by step using the input array `[0, 2, 1, 2, 0]`:

// 1. Initialize the pointers:
//    - `low` starts at index 0.
//    - `high` starts at index `N - 1` (4 in this case, since the array length is 5).
//    - `mid` starts at index 0.

// 2. **First Iteration:**
//    - `arr[mid]` is 0, so we swap `arr[low]` and `arr[mid]`.
//    - Now the array becomes `[0, 2, 1, 2, 0]`, and both `low` and `mid` are incremented by 1.

// 3. **Second Iteration:**
//    - `arr[mid]` is 2, so we swap `arr[mid]` and `arr[high]`.
//    - Now the array becomes `[0, 0, 1, 2, 2]`, and `high` is decremented by 1.

// 4. **Third Iteration:**
//    - `arr[mid]` is 1, so we simply increment `mid` by 1.
//    - The array remains `[0, 0, 1, 2, 2]`.

// 5. **Fourth Iteration:**
//    - `arr[mid]` is 2, so we swap `arr[mid]` and `arr[high]`.
//    - Now the array becomes `[0, 0, 1, 2, 2]`, and `high` is decremented by 1.

// 6. **Fifth Iteration:**
//    - `arr[mid]` is 2, so we swap `arr[mid]` and `arr[high]`.
//    - Now the array becomes `[0, 0, 1, 2, 2]`, and `high` is decremented by 1.

// 7. At this point, `mid` has become greater than `high`, so the loop terminates.

// The final sorted array is `[0, 0, 1, 2, 2]`. Here's a summary of the changes at each step:

// - Initial: `[0, 2, 1, 2, 0]`
// - After swapping 0s: `[0, 2, 1, 2, 0]`
// - After swapping 2s: `[0, 0, 1, 2, 2]`
// - After swapping 2s: `[0, 0, 1, 2, 2]`
// - After swapping 2s: `[0, 0, 1, 2, 2]`

// The array has been successfully sorted in ascending order of 0s, 1s, and 2s, as required by the problem statement.