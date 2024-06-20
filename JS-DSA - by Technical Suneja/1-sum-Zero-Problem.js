let input = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// for (const item of input.entries()) {
//     console.log(item[0])
// }
// console.log("*****************")
// for (const item of input.entries()) {
//     console.log(item[1])
// }

function checkSumZero(array) {
	const pairs = [];
	for (const [i, item] of array.entries()) {
		for (let j = i + 1; j < array.length; j++) {
			console.log(i, j);
			if (item + array[j] === 0) {
				pairs.push([item, array[j]]);
				break;
			}
		}
	}
	return pairs;
}

console.log(checkSumZero(input));
