// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	/****** My solution by getting hint in tut. *****/
	const chars = {};
	let max = 0;
	let maxChar = '';
	for (let char of str) {
	    chars[char] = chars[char] + 1 || 1;
	    if (chars[char] > max) {
	        max = chars[char];
	        maxChar = char;
	    }
	}
	return maxChar;

	/* Tuters Solution */
	// const charMap = {};
	// let max = 0;
	// let maxChar = '';
	// for (let char of str) {
	//     charMap[char] = charMap[char] + 1 || 1;
	// }
	// for (let char in charMap) {
	//     if (charMap[char] > max) {
	//         max = charMap[char];
	//         maxChar = char;
	//     }
	// }
	// return maxChar
}

module.exports = maxChar;
