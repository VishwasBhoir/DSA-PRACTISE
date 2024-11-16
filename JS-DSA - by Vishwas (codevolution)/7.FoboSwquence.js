function fibo(n) {
	const fibSeries = [0, 1];

	if (n === 0) return [];
	if (n === 1) return [0];
	if (n === 2) return [0, 1];

	for (let i = 2; i < n; i++) {
		fibSeries.push(fibSeries[i - 2] + fibSeries[i - 1]);
	}
	return fibSeries;
}

console.log(fibo(3));
