'use strict';

/* NAIVE SOLUTION */
// TIME COMPLEXITY- O(n^2)

// const arr1 = [1, 4, 6];
// const arr2 = [36, 1, 16];

// function logic
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }
// // calling function and printing returned value.
// console.log(same(arr1, arr2));

/* OPTIMIZED SOLUTION */
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = frequencyCounter2[val] + 1 || 1;
    }

    // Get it cleared.
    for (let key in frequencyCounter1) {
        // key check in freqCounter2. if it not return false at here.
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // if Key is there in freqCounter2 then checks for value match
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
