let input = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// This is optimized solution for problem 1.
const sumZeroOptimized = function (array) {
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		let sum = array[left] + array[right];
		if (sum === 0) return [left, right];
		if (sum > 0) right--;
		if (sum < 0) left++;
	}

	return "No pair with sum 0";
};

console.log(sumZeroOptimized(input));
