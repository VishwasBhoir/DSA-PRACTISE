'use strict';

/**** Linear Search ****/

// Time Comlexity:
// Best Case - O(1)
// avg Case - O(n)
// Worse Case- O(n)
/**** ************* ****/

// LOGIC
function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            // console.log(i, arr[i]);
            return i;
        }
    }
    return -1;
}

// Practice
function linearSearchPractice(arr, value) {
    
}

// let arr = [12, 23, 45, 56, 78, 91, 98, 87, 76, 65, 54, 43, 32, 21];
// let value = 32;
// console.log(findIdxOf(arr, value));

let numbers = [4, 5, 9, 3, 7, 2, 8, 1, 6, 0];

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

console.log(linearSearch(states, 'Maharashtra'));
console.log(linearSearch(states, 'Goa'));
console.log(linearSearch(numbers, 8));

