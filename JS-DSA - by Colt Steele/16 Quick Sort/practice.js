function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivot = 0;
    let swap = 0;

    for(let i = startIdx +1 ; i <=endIdx; i++){
        if (arr[i]<arr[pivot]) {
            swap++;
            swap
        }
    }
}
