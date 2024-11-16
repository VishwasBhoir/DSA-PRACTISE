// const num = 15487;
// const string = 'Vishwas';

// /* PROBLEM NO. 1 SOLUTION*/
// const reverseString = function (string) {
//     if (!str || str.length < 2 || typeof string !== 'string')
//         return `Parameter is not "string" type`;

//     return [...string].reverse().join('');
// };

/* PROBMEM NO. 2 SOLUTION */
const mergeSortedArrays = function (arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }
    
    let median =
        mergedArr.length % 2 === 0
            ? (mergedArr[mergedArr.length / 2 - 1] +
                  mergedArr[mergedArr.length / 2]) /
              2
            : mergedArr[Math.floor(mergedArr.length / 2)];
    return median;
};

console.log(mergeSortedArrays([1, 2], [3, 4,5]));
