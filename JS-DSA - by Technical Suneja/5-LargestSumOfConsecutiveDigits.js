// const input = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8];
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 2;

function getLargestSum(n, arr) {
	if (arr.length < n) return "n is greater than size of input arr. ";

	let largestSum = 0;
	for (let i = 0; i < arr.length - n + 1; i++) {
		// let j = i;
		// sum = 0;
		// while (j <= i + n - 1) {
		// 	sum += arr[j];
		// 	j++;
		// }

		// for the above while loop you can start j with 0 and can do sum+= arr[i+j]... below is example

		let j = 0;
		sum = 0;
		while (j < n) {
			sum += arr[i + j];
			j++;
		}

		if (sum > largestSum) largestSum = sum;
	}
	return largestSum;
}

console.log(getLargestSum(num, input));
