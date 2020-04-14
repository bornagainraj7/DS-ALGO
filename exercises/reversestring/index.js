// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // SOLUTION 1
    // let myArr = str.split('');
    // myArr.reverse();
    // return myArr.join('');

    // return str.split('').reverse().join('');

    // SOLUTION 2
    // let rev = '';
    // for (let char of str) {
    //     rev = char + rev;
    // }
    // return rev;

    // SOLUTION 3
    // let myArr = str.split('');
    // return myArr.reduce((rev, char)=> {
    //     return char + rev;
    // }, '');

}
module.exports = reverse;
