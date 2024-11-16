'use strict';

/* ****** Bubble Sort ****** */

/* Time Comlexity: */
// Best Case - O(n)
// avg Case - O(n^2)
// Worse Case- O(n^2)

/* Space complexity: O(1) */

/* ****** *********** ****** */

function bubbleSortArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

/* ***** Optimized Bubble Sort: ***** */
// If no swap needed (means arr is sorted and no need to iterate throw)

function optimizedBubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

// let bubbleSortedArr = bubbleSortArr(numbers);
// console.log(bubbleSortedArr);

// Working of inbuilt sort method:
// console.log(numbers.sort());
// console.log(numbers.sort((a, b) => a - b));
// console.log(numbers.sort((a, b) => b - a));

// console.log(optimizedBubbleSort([5, 1, 2, 6, 3, 4]));
// console.log([5, 1, 2, 6, 3, 4].length);
let numbers = [45, 12, 36, 3, 17, 98, 74, 15];
let numbers2 = [8, 6, 1, 2, 3, 5, 4, 7];
console.log(bubbleSortRevision(numbers));
console.log(lessOptBubSort(numbers));
console.log(bubbleSortRevision(numbers2));
console.log(lessOptBubSort(numbers2));
