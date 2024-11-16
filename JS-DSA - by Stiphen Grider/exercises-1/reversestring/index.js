// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// for(let i = 0, j=str.length-1; i >= j; i++, j--){
	//     [i, j] = [j,i]
	// }
	// return str;

	/* correct Solution for above provided code: */
	// let reversed = [...str];
	// for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
	//     [reversed[i], reversed[j]] = [reversed[j], reversed[i]];
	// }
	// return reversed.join('');

	/**** VISH SOLUTION ****/

	/* No.1 */
	// let strSolution = '';
	// for (let i = str.length - 1; i >= 0; i--) {
	//     strSolution = strSolution + str.charAt(i);
	// }
	// return strSolution;

	/* No.2 - thought of it after watching solution 1. */
	// return [...str].reverse().join('');

	/* SOLUTION 1 */
	// const arr = str.split('');
	// arr.reverse();
	// return arr.join('');
	/* or */
	// return str.split('').reverse().join('')

	/* SOLUTION 2 */
	// let reversed = '';
	// for (const charactor of str) {
	//     reversed = charactor + reversed;
	// }
	// return reversed;

	/* SOLUTION 3 */
	/* used Array.prototype.reduce() helper. */
	// return str.split("").reduce((rev, char) => char + rev, "");

	let reversedStr = "";
	console.log(str);
	for (const char of str) {
		reversedStr = char + reversedStr;
		console.log("Char: ", char);
	}
	return reversedStr;
}

module.exports = reverse;
