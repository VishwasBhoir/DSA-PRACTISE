// Prefer Colt Steele / Scote Burrette

function selectionSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let largest = 0;
        for (let j = 0; j < i; j++) {
            if (arr[largest] < arr[j]) largest = j;
        }
        [arr[largest], arr[i]] = [arr[i], arr[largest]];
    }
    return arr;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
