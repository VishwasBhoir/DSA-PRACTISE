// Prefer Colt Steele / Scote Burrette

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(bubbleSort(arr));
