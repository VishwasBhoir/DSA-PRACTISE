'use strict';

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
}

function pivot(arr, pivotIndex = 0, endIndex = arr.length-1) {
    let swapIndex = pivotIndex;
    for(let i = pivotIndex+1; i < endIndex; i++){
        if (arr[i] < arr[pivotIndex]) {
            swapIndex++;
            swap[arr, swapIndex, i]
        }
    }
    swap(arr, swapIndex, pivotIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length-1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivovtIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

let arr = [11, 1, 20, 17, 2, 6, 200, 4, 9, 7];
console.log(quickSort(arr));
