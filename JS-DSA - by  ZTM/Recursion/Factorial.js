function getFactorial(n) {
    if (n < 2) return 1;
    return n * getFactorial(n - 1);

}

function getFactorialIterative(n) {
    let factorial = 1;
    for(let i = n; i > 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

let n = 2
console.log(getFactorial(n))
console.log(getFactorialIterative(n))