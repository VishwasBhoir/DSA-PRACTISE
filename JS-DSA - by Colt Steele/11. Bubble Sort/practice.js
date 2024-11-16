function bubbleSort(arr) {
    let swap = true;
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = false;
            }
        }
        if (swap) break;
    }
    return arr;
}

let numbers = [45, 12, 36, 3, 17, 98, 74, 15];
let numbers2 = [8, 6, 1, 2, 3, 5, 4, 7];
console.log(bubbleSort(numbers));
console.log(bubbleSort(numbers2));
