// output : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

function getFibo(num) {
	const fibo = [];
	for (let i = 0; i < num; i++) {
		if (i === 0 || i === 1) fibo.push(i);
		else {
			fibo.push(fibo[i - 1] + fibo[i - 2]);
		}
	}

	return fibo;
}

let fiboLength = 15;
let fibo = getFibo(fiboLength);
console.log(fibo);
