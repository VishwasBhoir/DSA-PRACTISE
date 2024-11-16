const inArr = [1, 2, 98, 3, 4, 5, 6, 56, 54];

function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let current = array[i];
		let j;
		for (j = i - 1; j >= 0 && array[j] > current; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = current;
	}
	return array;
}

console.log(insertionSort(inArr));
