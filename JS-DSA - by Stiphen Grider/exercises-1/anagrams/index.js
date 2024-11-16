// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* **** MY SOLUTION **** */
// function anagrams(str1, str2) {
// str1 = str1.toLowerCase().replace(/[^\w]/g, '');
// str2 = str2.toLowerCase().replace(/[^\w]/g, '');
//     if (str1.length !== str2.length) return false;
//     const counter = {};
//     for (let char of str1) {
//         counter[char] = (counter[char] || 0) + 1
//     }
//     for (let char of str2) {
//         if (!counter[char]) return false;
//         counter[char]--;
//     }
//     return true;
// }

/* **** My solution 2 **** */

// function sortString(str) {
// 	return str
// 		.replace(/[^a-zA-Z]/g, "")
// 		.toLowerCase()
// 		.split("")
// 		.sort()
// 		.join("");
// }

// function anagrams(str1, str2) {
// 	const s1 = sortString(str1);
// 	const s2 = sortString(str2);
// 	return s1 === s2;
// }

/* **** INSTRUCTOR'S SOLUTION **** */

// function anagrams(stringA, stringB) {
//     aCharMap = getCharMap(stringA);
//     bCharMap = getCharMap(stringB);
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) return false;
//     }
//     return true;
// }

// function getCharMap(str) {
//     str = str.toLowerCase().replace(/[^\w]/g, '');
//     const charMap = {};
//     for (let char of str) {
//         charMap[char] = (charMap[char] || 0) + 1;
//     }
//     return charMap;
// }

// ***** Stephens Solution 2

function sortString(str) {
	return str
		.replace(/[^a-zA-Z]/g, "")
		.toLowerCase()
		.split("")
		.sort()
		.join("");
}

function anagrams(str1, str2) {
	const s1 = sortString(str1);
	const s2 = sortString(str2);
	return s1 === s2;
}

module.exports = anagrams;
