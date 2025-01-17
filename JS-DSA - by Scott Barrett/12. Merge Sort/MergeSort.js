'use strict';

/* MERGE SORT HELPER 'MERGE()' FUNCTION */
function merge(arr1, arr2) {
    let combined = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            combined.push(arr1[i]);
            i++;
        } else {
            combined.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        combined.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        combined.push(arr2[j]);
        j++;
    }
    return combined;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

let arr2 = [11, 1, 20, 17, 2, 6, 200, 4, 9, 7];
console.log(mergeSort(arr2));

// return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
//  3 lines (left, right, return) in 'mergeSort()' function can be combined like above.
