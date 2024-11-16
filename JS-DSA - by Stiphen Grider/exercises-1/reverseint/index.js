// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	/* **** VISH SOLUTION **** */
	/* NO.1 (after getting idea from tut.*/
	// const sign = Math.sign(n);
	// n = [...String(Math.abs(n))].reverse().join('');
	// console.log(typeof n);
	// return sign * Number(n);
	/* NO.2 */
	/* Poor Math Logic */
	// let reversedInt = 0;
	// while (n) {
	//     reversedInt = reversedInt * 10 + (n % 10);
	//     n = parseInt(n / 10);
	// }
	// return reversedInt;
	/* NO.3 */
	// return parseInt([...String(n)].reverse().join('')) * Math.sign(n);
	/* TUT SOLUTION 1 */
	// let reversed = n.toString().split('').reverse().join('');
	// return parseInt(reversed) * Math.sign(n)

	console.log("Practice: ");
	/* **** PRACTICE **** */

}

module.exports = reverseInt;
