// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	/* ***** MY SOLUTION ***** */
	/**** NO 1 ****/
	// str = str.toLowerCase().split(' ');
	// let result = [];
	// for (let item of str) {
	//     result.push(item[0].toUpperCase() + item.slice(1));
	// }
	// return result.join(' ');

	/**** NO 2 ****/
	/* ..test is failing.. */
	// str = str[0].toUpperCase() + str.slice(1);
	// for (let char of str) {
	//     if (str[str.indexOf(char) - 1] === ' ') {
	//         str =
	//             str.slice(0, str.indexOf(char)) +
	//             str[str.indexOf(char)].toUpperCase() +
	//             str.slice(str.indexOf(char) + 1);
	//     }
	// }
	// return str;

	/* ***** SOLUTION 1 ***** */
	// const words = [];
	// for (const word of str.split(' ')) {
	//     words.push(word[0].toUpperCase() + word.slice(1));
	// }
	// return words.join(' ');

	/* ***** SOLUTION 2 ***** */
	// let result = str[0].toUpperCase();
	// for (let i = 1; i < str.length; i++) {
	//     if (str[i - 1] === ' ') {
	//         result += str[i].toUpperCase();
	//     } else {
	//         result += str[i];
	//     }
	// }
	// return result;

	// ***** my practice solution

	str = str.split(" ");
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].slice(0, 1).toUpperCase() + str[i].slice(1);
	}

	return str.join(" ");
}

module.exports = capitalize;
