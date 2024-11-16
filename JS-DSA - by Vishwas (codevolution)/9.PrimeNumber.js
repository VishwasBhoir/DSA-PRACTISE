function isPrime(n) {
	let prime = false;

	let mid = Math.ceil(n / 2);
	for (let i = mid; i > 1; i--) {
		if (n % i === 0) return prime;
	}
	prime = true;
	return prime;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(11));
console.log(isPrime(89));
console.log(isPrime(53));
console.log(isPrime(71));
console.log(isPrime(97));
