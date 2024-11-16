// Returns 'i'th digit in 'num'.
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Returns total numbers of digits in 'num'
// Eg. => ip: '12345' op: '5'
function getDigitCount(num) {
    if (num === 0) return 0;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Returns max nos of digits in 'nums' an element is having.
// ip: [12,45,4123,85,6954,124], op: 4. as 2 elements have 4 digits.
function getMaxDigits(nums) {
    let maxDigits = 0;
    nums.forEach(element => {
        maxDigits = Math.max(maxDigits, getDigitCount(element));
    });
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = getMaxDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

let numbers = [45, 12, 36, 3, 17, 98, 74, 15];
console.log(radixSort(numbers));
