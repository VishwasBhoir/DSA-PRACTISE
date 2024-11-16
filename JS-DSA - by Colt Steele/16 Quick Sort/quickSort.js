'use strict';

/* ****** Quick Sort ****** */

/* Time Comlexity: */
// Best Case - O(nlogn)
// avg Case - O(nlogn)
// Worse Case- O(n^2)

/* Space complexity: O(logn) */

/* ****** *********** ****** */

/* **** NOTE **** */
// Remember, This Function as This is returning variable as PivotIdx makes it more readable
/* **** **** **** */
// function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
//     function swap(arr, i, j) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }

//     let pivotIdx = startIdx;

//     for (let i = startIdx + 1; i < arr.length; i++) {
//         if (arr[startIdx] > arr[i]) {
//             pivotIdx++;
//             swap(arr, pivotIdx, i);
//         }
//     }
//     swap(arr, pivotIdx, startIdx);

//     return pivotIdx;
// }

/* MY SOLUTION DURING/BEFORE SESSION */

// function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
//     const swap = (arr, i, j) => {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     };

//     let pivotIdx = startIdx;
//     for (let i = startIdx + 1; i < arr.length; i++) {
//         if (arr[startIdx] > arr[i]) {
//             pivotIdx++;
//             swap(arr, pivotIdx, i);
//         }
//     }
//     swap(arr, pivotIdx, startIdx);
//     return pivotIdx;
// }

// Helper Function, returns pivot index.
function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    let pivot = arr[startIdx];
    let pivotIdx = startIdx;
    for (let i = startIdx + 1; i <= endIdx; i++) {
        if (arr[i] < pivot) {
            pivotIdx++;
            swap(arr, pivotIdx, i);
        }
    }
    swap(arr, startIdx, pivotIdx);
    return pivotIdx;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

const numbers1 = [3, 3, 5, 6, 2, 4, 0, 1];
console.log(numbers1);
console.log(quickSort(numbers1));
