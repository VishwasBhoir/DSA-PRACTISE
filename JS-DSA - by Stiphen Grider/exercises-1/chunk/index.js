// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// ***** MY SOLUTION *******
// function chunk(array, size) {
// 	if (array.length == 0) return -1;

// 	const result = [];
// 	const chunk = [];

// 	for (let i = 0; i < array.length; i++) {
// 		chunk.push(array[i]);
// 		if ((i + 1) % size === 0 || i === array.length - 1) {
// 			result.push([...chunk]);
// 			chunk.length = 0;
// 		}
// 	}
// 	return result;
// }

// ** Not able to understand below one

// function chunk(array, size) {
// 	const chunked = [];

// 	for (let element of array) {
// 		const last = chunked[chunked.length - 1];

// 		if (!last || last.length === size) chunked.push([element]);
// 		else last.push(element);
// 	}

// 	return chunked;
// }

// ** 2nd Approach

function chunk(array, size) {
	const chunked = [];
	let index = 0;

	while (index < array.length) {
		chunked.push(array.slice(index, index + size));
		index += size;
	}

	return chunked;
}

module.exports = chunk;
