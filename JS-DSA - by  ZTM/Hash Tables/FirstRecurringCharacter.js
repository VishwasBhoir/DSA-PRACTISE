/* Brute Forse Solution */
// function getFirstRecurringCharacter(arr) {
//     let chars = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (chars.includes(arr[i])) return arr[i];
//         chars.push(arr[i]);
//     }
//     return undefined;
// }

/* My Solution */

// function getFirstRecurringCharacter(arr) {
//     let charMap = {};
//     for (let char of arr) {
//         charMap[char] = charMap[char] + 1 || 1;
//         if (charMap[char]>1) return char;
//     }
//     return undefined
// }

/* My Solution Modified */
// function getFirstRecurringCharacter(arr) {
//     let charMap = {};
//     for (let char of arr) {
//         if (charMap[char] !== undefined) return char;
//         else charMap[char] = 1;
//     }
//     return undefined;
// }

/* Tuter's solution */
// function getFirstRecurringCharacter(arr) {
//     let map = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (map[input[i]] !== undefined) {
//             return input[i];
//         } else {
//             map[input[i]] = 1;
//         }
//     }
// }

console.log(getFirstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringCharacter([2, 3, 4, 5]));
