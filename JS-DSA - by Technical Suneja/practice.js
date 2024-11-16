const a = [4, 7, 9, 33, 77, 44, 22];

function findNumInx(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return i;
		}
	}
	return -1;
}

console.log(findNumInx(a, 44));
