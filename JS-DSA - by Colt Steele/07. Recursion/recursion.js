'use strict';

/* **** First Recursive Function **** */

// function countDown(num) {
//     if (num <= 0) {
//         return;
//     }
//     countDown(num - 1)
//     console.log(num)
// }
// console.log(countDown(100))

/* **** ************************ **** */

/* **** Second Recursive Function **** */

// function sumRange(num) {
//     if (num === 1) return 1;
//     return num + sumRange(num - 1);
// }

// console.log(sumRange(10))

/* **** ************************ **** */

/* **** Writing Factorial Iteratively **** */

// My Solution:

// function getFactorial(num) {
//     let factorial = 1;
//     if (num === 0) {
//         return 1;
//     }
//     for(let i = 1; i <=num ; i++){
//         factorial *= i;
//     }
//     return factorial;
// }
// console.log(`My Solution:`)
// console.log(getFactorial(10))
// console.log(getFactorial(0))

// // Instructor's Solution:

// function factorial(num) {
//     let total = 1
//     for(let i = num; i > 0; i--){
//         total *= i;
//     }
//     return total;
// }

// console.log(`Instructor's Solution:`);
// console.log(factorial(10))
// console.log(factorial(0))

/* **** ************************ **** */

/* **** Writing Factorial Recursively **** */

// My Solution:

// function getFactorial(num) {
//     // base case:
//     if (num === 0) return 1;
//     // logic:
//     return num * getFactorial(num-1)
// }

// console.log(getFactorial(5))
// console.log(getFactorial(10))
// console.log(getFactorial(0))

// // Instructor's Solution:

// function getFactorial(num) {
//     // base case:
//     if (num === 1) return 1;
//     // logic:
//     return num * getFactorial(num - 1);
// }

// console.log(`Instroctor's Solution:`)
// console.log(getFactorial(5));
// console.log(getFactorial(10));
// console.log(getFactorial(0));

/* **** ************************ **** */