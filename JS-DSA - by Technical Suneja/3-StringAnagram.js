let str1 = "aabb.";
let str2 = "babb  ";

function isAnagram(s1, s2) {
	s1 = s1.toLowerCase().replaceAll(/[^a-zA-Z]/g, "");
	s2 = s2.toLowerCase().replaceAll(/[^a-zA-Z]/g, "");

	if (s1.length !== s2.length) return false;

	let charMap = {};

	for (const char of s1) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	for (const item of s2) {
		if (!charMap[item]) return false;
		charMap[item]--;
	}

	return true;
}

console.log(isAnagram(str1, str2));
