function getPivotIdx(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivotIdx = startIdx;
    let pivot = arr[pivotIdx];

    for (let i = startIdx + 1; i <= endIdx; i++) {
        if (arr[i] < pivot) {
            pivotIdx++;
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
        }
    }
    [arr[pivotIdx], arr[startIdx]] = [arr[startIdx], arr[pivotIdx]];
    return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if (left<right) {
        let pivotIdx = getPivotIdx(arr, left, right);
        quickSort(arr, left, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

let numbers = [45, 12, 36, 3, 17, 98, 74, 15];
console.log(quickSort(numbers));