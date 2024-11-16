// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // let count = 0;
    // for (const char of str) {
    // if (/[aeiou]/gi.test(char)) count++; // g for globle & i for case insensitive;
    // }
    // return count;
    // ****************
    // let count = 0;
    // for (const char of str) {
    //     if (/[aeiouAEIOU]/.test(char)) {
    //         count++;
    //     }
    // }
    // return count;
    // ****************
    // let count = 0;
    // let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // for (const char of str) {
    //     if (arr.includes(char)) {
    //         count++;
    //     }
    // }
    // return count;
    // ****************
    /* TUT SOLUTION */
    // let count = 0;
    // let checker = ['a', 'e', 'i', 'o', 'u'];
    // for (const char of str) {
    //     if (checker.inclueds(char)) count++;
    // }
    // return count;
    // ****************
    // NOTE: String.prototype.match returns array of all the matches found. if no match found, returns null.
    const matches = str.match(/[aeiou]/gi) // i - ignores case, G- globale(dont stops when found first value);
}

module.exports = vowels;
