'use strict'

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (var j = i - 1; arr[j] > temp && j >= 0; j--) {
            //Declaring j with 'var' makes it globle, can be accessed out side of loop.
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

const arr = [1, 9, 7, 8, 6, 4, 3];
console.log(insertionSort(arr));