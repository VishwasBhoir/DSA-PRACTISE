// var maxArea = function (height) {
//     let max = 0;
//     for(let i = 0; i < height.length; i++){
//         for (let j = i + 1; j < height.length; j++){
//             let area = (j - i) * Math.min(height[i], height[j]);
//             if (area > max) max = area;
//         }
//     }
//     return max;
// };

var maxArea = function (height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const ht = Math.min(height[i], height[j]);
            const width = j - i;
            const area = ht * width;
            max= Math.max(area, max)
        }
    }
    return max;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const arr2 = [1, 7, 2, 8, 1, 6];
console.log(maxArea(height));
console.log(maxArea(arr2));

console.log(maxArea([]))
console.log(maxArea([1]))
