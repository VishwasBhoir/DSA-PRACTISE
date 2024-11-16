const inputArr1 = [2, 4, 4, 6, 8];
const inputArr2 = [4, 16, 36, 64];

function getArrMap(arr) {
	const map = {};
	for (const item of arr) {
		map[item] = map[item] + 1 || 1;
	}
	return map;
}

function checkSquare(arr1, arr2) {
	const map1 = getArrMap(arr1);
	const map2 = getArrMap(arr2);

	for (const key in map1) {
		if (!map2[key * key] || map1[key] !== map2[key * key]) return false;
	}
	return true;
}

let result = checkSquare(inputArr1, inputArr2);
console.log(result);
