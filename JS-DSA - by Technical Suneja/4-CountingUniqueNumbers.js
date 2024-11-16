const input = [1, 3, 2, 4,5,6,7, 3, 2, 4, 2, 3, 4];

function countUnique(arr) {
	// **** MY LOGIC USING SET ********
	// const unique = new Set(input);
	// return unique.size;
	// **** SOLUTION 2 ********
	//
	// let unique = 0;
	// let char = 0;
	// for (const item of arr) {
	// 	if (item !== char) {
	// 		unique++;
	// 		char = item;
	// 	}
	// }
	// return unique;
	// **** SUNEJA'S SOLUTION ********
	// let i = 0;
	// for (let j = 1; j < arr.length; j++) {
	// 	if (arr[i] !== arr[j]) {
	// 		i++;
	// 		arr[i] = arr[j];
	// 	}
	// }
	// return i + 1;

	// **** Abve logics will work for sorted arrays only below logic will work for unsorted too ********
	let unique = 0;
	let charMap = {};
	for (const item of arr) {
		if (!charMap[item]) {
			unique++;
			charMap[item] = charMap[item] + 1 || 1;
		}
	}
	return unique;
}

console.log(countUnique(input));
