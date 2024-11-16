'use strict';

/**** Binary Search ****/
// BIG-NOTE : Always Remember that BINARY SEARCH ONLY WORKS ON SORTED ARRAYS!

// It is a Divide & Conquer Algorithm

/* Time Comlexity: */
// Best Case - O(1)
// avg Case - O(logn)
// Worse Case- O(logn)

/* Space complexity: */
/**** ************* ****/

// LOGIC
// Original Solution
// function binarySearch(arr, value) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== value && start <= end) {
//         if(value < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if(arr[middle] === value){
//         return middle;
//     }
//     return -1;
// }

// Refactored Version
// function binarySearch(arr, value) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while (arr[middle] !== value && start <= end) {
//         if (value < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === value ? middle : -1;
// }

let numbers = [4,5,9,3,7,2,8,1,6,0].sort();
// above array is sorted.Note that binary Search only works when arr is sorted!
// Thats why on numbers sort() function is called!
// console.log(numbers);

let states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
];

// console.log(binarySearchMine(numbers, 14));
// console.log(`**********`);
// console.log(binarySearchMine(numbers, 12));
// console.log(`**********`);
// console.log(binarySearchMine(numbers, 87));
// console.log(`**********`);
// console.log(binarySearchMine(numbers, 21));
// console.log(`**********`);
// console.log(binarySearchMine(numbers, 23));
// console.log(binarySearch(states, 'Puducherry'));
// console.log(binarySearch(states, 'Mizoram'));
console.log(binarySearchPractice(numbers,6))
console.log(binarySearchPractice(states, 'Maharashtra'))
