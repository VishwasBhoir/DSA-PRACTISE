'use strict';

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

let numbers = [45, 12, 36, 3, 17, 98, 74, 15];
console.log(selectionSort(numbers));
