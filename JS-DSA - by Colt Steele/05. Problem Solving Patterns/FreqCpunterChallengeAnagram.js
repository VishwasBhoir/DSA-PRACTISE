'use strict';

function checkIfAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.lenght; i++) {
        let letter = first[i];
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }

    for (let i = 0; i < second.lenght; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    console.log(lookup);
    return true;
}

const str1 = 'anagrams';
const str2 = 'nagaramm';

const anagram = checkIfAnagram(str1, str2)
console.log(anagram)
