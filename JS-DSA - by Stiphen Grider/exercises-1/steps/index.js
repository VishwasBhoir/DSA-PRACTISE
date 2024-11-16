// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    /* ***** MY SOLUTION ***** */
    // for (let i = 1; i <= n; i++) {
    //     let pounds = '';
    //     let spaces = '';
    //     for (let j = 1; j <= i; j++) {
    //         pounds = pounds + '#';
    //     }
    //     for (let k = 1; k <= n - i; k++) {
    //         // for(let k = i; k < n; k++) <- condition can be this too;
    //         spaces = spaces + ' ';
    //     }
    //     console.log(pounds + spaces);
    // }
    /* ***** TURER SOLUTION **** */
    /* No1 */
    // for (let row = 0; row < n; row++) {
    //     let str = '';
    //     for (let column = 0; column < n; column++) {
    //         if (column <= row) {
    //             str += "#";
    //         } else {
    //             str += ' ';
    //         }
    //     }
    //     console.log(str);
    // }

    /* No2 */
    // Watch vdo again
    // if (n === 0) {
    //     return;
    // }

}

module.exports = steps;
