'use strict';

// function sumZeroPair(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     let pairs=[];
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             pairs.push([arr[left], arr[right]]);
//             right--;
//             left++;
//             // return [arr[left], arr[right]] if only one pair needed;
//         } else if (sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }
//     return pairs;
// }

// let arr = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
// let arr1 = [-4, -3, -2, -1, 0, 10];
// let pairs = sumZeroPair(arr);
// let pairs2 = sumZeroPair(arr1);
// console.log(pairs);
// console.log(pairs2);

/* ***************************************** */
// Multiple Pointer Count Unique Values Challenge
/* ***************************************** */

// My solution:-

// function countUniqueValues(arr) {
//     let count = 0;
//     let mainPointer = 0;
//     let secondaryPointer = mainPointer + 1;
//     while (mainPointer < arr.length) {
//         if (arr[mainPointer] === arr[secondaryPointer]) {
//             secondaryPointer++;
//         } else {
//             count++;
//             mainPointer = secondaryPointer;
//             secondaryPointer = mainPointer + 1;
//         }
//     }
//     return count;
// }

// let arr1 = [1, 1, 1, 1, 1, 2];
// let arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
// let arr3 = [-2, -1, -1, 0, 1];
// let arr4 = [];

// console.log(countUniqueValues(arr1));
// console.log(countUniqueValues(arr2));
// console.log(countUniqueValues(arr3));
// console.log(countUniqueValues(arr4));

// Colt's Solution:-

// function countUniqueValues(arr) {
//     if (arr.length === 0) return 0;
//     let i = 0;
//     for(let j = 1; j < arr.length; j++){
//         if (arr[i] !== arr[j]) {
//             i++
//             arr[i]=arr[j]
//         }
//     }
//     return i + 1;
// }

/* Using JS SET data structure */
// function countUniqueValues(arr) {
//     const set = new Set(arr);
//     return set.size
// }

let arr1 = [1, 1, 1, 1, 1, 2];
let arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
let arr3 = [-2, -1, -1, 0, 1];
let arr4 = [];
let arr5 = [4,5,6,7,8,1,4,2,5]

console.log(countUniqueValues(arr1));
console.log(countUniqueValues(arr2));
console.log(countUniqueValues(arr3));
console.log(countUniqueValues(arr4));
console.log(countUniqueValues(arr5));



