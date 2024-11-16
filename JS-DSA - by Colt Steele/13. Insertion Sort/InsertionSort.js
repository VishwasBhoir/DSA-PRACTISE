'use strict';

/* ****** Insertion Sort ****** */

/* Time Comlexity: */
// Best Case - O(n)
// avg Case - O(n^2)
// Worse Case- O(n^2)

/* Space complexity: O(1)*/

/* ****** *********** ****** */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        // Notice the declaration here is with "var"
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

function insertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

let numbers = [45, 12, 36, 3, 17, 98, 74, 15];
console.log(insertionSort(numbers));
console.log(insertionSort2(numbers));
