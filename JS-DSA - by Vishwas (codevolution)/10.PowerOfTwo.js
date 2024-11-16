function isPowerOfTwo(n) {
	for (let i = n; i >= 2; i /= 2) {
		if (i % 2 !== 0) return false;
	}
	return true;
}

console.log(isPowerOfTwo(8));
