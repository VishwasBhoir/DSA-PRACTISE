'use strict';

// Statement: Given 2 arrays.find if there is any element common.

/* SOLUTION with 'For Loop' */
function findCommon(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){
        for(let j = i; j < arr2.length; j++){
            if (arr1[i] === arr2[j]) return true;
        }
    }
    return false;
}

/* SOLUTION with 'Object (Hash Table)' */

function findCommonWithHash(arr1, arr2) {
    let obj = {};
    for(let i = 0; i < arr1.length; i++){
        obj[arr1[i]] = true;
    }
    console.log(obj);
    for(let i = 0; i < arr2.length; i++){
        if (obj[arr2[i]])
            return true;
    }
    return false;
}

/* Function Call */
const a1 = [5,4,8]
const a2 = [2,9,4]
const a3 = [2,9,3]
console.log(findCommon(a1, a2));
console.log(findCommon(a1, a3));
console.log(findCommonWithHash(a1, a2));
console.log(findCommonWithHash(a1, a3));