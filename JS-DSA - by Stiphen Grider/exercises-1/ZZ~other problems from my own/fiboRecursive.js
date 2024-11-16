// output : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

function getFibo(n) {
	if (n <= 1) {
		return [0, 1].slice(0, n + 1);
	} else {
		const fib = getFibo(n - 1);
		fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
		return fib;
	}
}

let fiboLength = 15;
let fibo = getFibo(fiboLength);
console.log(fibo);
