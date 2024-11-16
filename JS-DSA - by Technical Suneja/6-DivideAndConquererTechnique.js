// problem statement:
// find the index of given no in a sorted Array;

const array = Array.apply(null, { length: 100000 }).map(Number.call, Number);


const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 10;

function findIndex(arr, n) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
		let mid = Math.floor((leftIdx + rightIdx) / 2);
    console.log(arr[mid])
		if (arr[mid] === n) return mid;
		else if (n > arr[mid]) leftIdx = mid + 1;
		else rightIdx = mid - 1;
	}
}

// console.log(findIndex(input, num));
console.log(findIndex(array, 847));
