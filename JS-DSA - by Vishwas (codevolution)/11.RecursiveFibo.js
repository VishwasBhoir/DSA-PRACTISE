function recFibo(n) {
	if (n === 0) return n;
	if (n === 2 || n === 3) return 1;
	return recFibo(n - 1) + recFibo(n - 2);
}

console.log(recFibo(9));
