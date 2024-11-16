let s = "abcabcdbb";

function longSubString(s) {
	if (!s.length) return 0;

	let p1 = 0;
	let p2 = 0;
	let maxLength = 0;
	const subStringSet = new Set();

	while (p2 < s.length) {
		if (!subStringSet.has(s[p2])) {
			subStringSet.add(s[p2]);
			p2++;
			maxLength = Math.max(maxLength, subStringSet.size);
			console.log(subStringSet.values());
		} else {
			subStringSet.delete(s[p1]);
			p1++;
		}
	}
	return maxLength;
}

console.log(longSubString(s));
