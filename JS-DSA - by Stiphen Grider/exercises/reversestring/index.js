// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    for(let i = 0, j=str.lenght-1; i >= j; i++, j--){
        [i, j] = [j,i]
    }
    return str;

}

module.exports = reverse;
