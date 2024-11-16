const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getOdd(arr) {
	let result = [];

	// Helper function

	function helperFun(inputArr) {
		if (inputArr.length === 0) return;
		if (inputArr[0] % 2 !== 0) {
			result.push(inputArr[0]);
		}
		helperFun(inputArr.slice(1));
	}

	helperFun(arr);

	return result;
}

console.log(getOdd(a));
