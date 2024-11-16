// const inArr = [43, 93, 34, 69, 56, 54];
const inArr = [1, 2, 98, 3, 4, 5, 6, 56, 54];

function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		[arr[min], arr[i]] = [arr[i], arr[min]];
		console.log("==>", arr);
	}
	return arr;
}

console.log(selectionSort(inArr));
