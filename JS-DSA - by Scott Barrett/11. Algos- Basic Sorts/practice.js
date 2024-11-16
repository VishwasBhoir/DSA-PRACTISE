'use strict';

function bubbleSort(arr) {
    let swap = false;
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
        if (!swap) break;
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let max = i;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                max = j;
            }
        }
        if (i !== max) {
            [arr[max], arr[i]] = [arr[i], arr[max]];
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j]>temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j+1] = temp;
    }
    return arr;
}

const arr = [1, 9, 7, 8, 12, 6, 4, 3];
console.log(bubbleSort(arr));
console.log(selectionSort(arr));
console.log(insertionSort(arr));
