// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	/***** VISH SOLUTIONS *****/
	/* No.1 */
	// let reversedStr = str.split('').reverse().join('');
	// if (str === reversedStr) return true;
	// else return false;
	/* No.2 */
	/* Good as when there is no matching instantly breaks the loop */
	// for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
	//     if (str[i] !== str[j]) return false;
	// }
	// return true;
	/* SOLUTION 1: */
	// let reversedStr = str.split('').reverse().join('');
	// return str === reversedStr;
	/* SOLUTION 2: */
	/* Using Array.prototype.every helper method */
	/* using array distructuring syntax is my choice, istructer uses split() method on str. */
    // return [...str].every((char, i) => { return char === str[str.length - 1 - i] })

    /* PRACTICE: */
    for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
        if (str[i] !== str[j]) return false;
        else return true;
    }
}

module.exports = palindrome;
