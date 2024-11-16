'use strict';

/* Scott's Solution */
function selectionSortSmallest(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) smallest = j;
        }
        if (i !== smallest) [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
    }
    return arr;
}

/* By considering Largest value Index */
function selectionSortLargest(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let largest = i;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[largest] < arr[j]) largest = j;
        }
        if (i !== largest) [arr[i], arr[largest]] = [arr[largest], arr[i]];
    }
    return arr;
}

const arr = [1, 9, 7, 8, 6, 4, 3];
console.log(selectionSortSmallest(arr));
console.log(selectionSortLargest(arr));
