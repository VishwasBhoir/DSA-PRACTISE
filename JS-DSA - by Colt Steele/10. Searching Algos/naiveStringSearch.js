// finding substring

let str = 'VishVishwas';
let sub = 'Vish';

function findSubstring(str, sub) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let j;
        for (j = 0; j < sub.length; j++) {
            if (sub[j] !== str[i + j]) break;
            if (j === sub.length - 1) count++;
        }
    }
    return count;
}

console.log(findSubstring(str, sub));
