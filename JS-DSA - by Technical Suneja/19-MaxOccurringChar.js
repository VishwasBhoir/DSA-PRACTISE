let s = "Vishwasbhoiiirrrrr   234";

function findMaxOccChar(str) {
	str = str.toLowerCase().replaceAll(/[^a-zA-Z]/g, "");

	let max = 0;
	let char = "";
	console.log(str);
	const strCharsCount = {};

	for (const char of str) {
		strCharsCount[char] = strCharsCount[char] + 1 || 1;
	}

	for (const key in strCharsCount) {
		if (strCharsCount[key] > max) {
			max = strCharsCount[key];
			char = key;
		}
	}

	return [char, max];
}

console.log(findMaxOccChar(s));
