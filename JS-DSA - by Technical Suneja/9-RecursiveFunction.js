let counter = 100000;
function recursiveFunction(n) {
	if (counter === n) return;
	console.log(n);
	recursiveFunction(n + 1);
}

recursiveFunction(1);
