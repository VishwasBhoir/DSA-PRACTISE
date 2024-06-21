let input = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// This is optimized solution for problem 1.
const sumZeroOptimized = function (array) {
    const pairs = [];
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            pairs.push([array[left], array[right]]);
            console.log(left, right);
            left++;
            right--;
        } else if (sum > 0) {
            console.log(left, right);
            right--;
        } else {
            console.log(left, right);
            left++;
        }
    }
    return pairs;
};

console.log(sumZeroOptimized(input));
