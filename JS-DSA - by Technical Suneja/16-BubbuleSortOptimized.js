// const inArr = [43, 93, 34, 69, 56, 54];
const inArr = [1, 2, 98, 3, 4, 5, 56, 54];

function bubbleSort(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let swapped = false;
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				swapped = true;
			}
		}

		if (!swapped) break;
	}
	return arr;
}

console.log(bubbleSort(inArr));
