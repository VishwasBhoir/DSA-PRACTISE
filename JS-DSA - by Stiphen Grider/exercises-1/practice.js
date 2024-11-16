function solve(a){
    let leftSum = 0;
    let rightSum = 0;
    for(let i = 0, j=a.length-1; i<j; i++, j--){
        leftSum += a[i];
        rightSum += a[j];
    }
    console.log( Math.abs(leftSum - rightSum));
    return Math.abs(leftSum - rightSum);
}

console.log(solve([1,2,1,2,1,3]))