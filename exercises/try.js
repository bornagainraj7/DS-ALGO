var a = '20';
var b = '10';
console.log(a+b); // o/p: 2010
console.log(a-b); // o/p: 10


// const word = 'Hi There!!!';
// console.log(word.replace(/[^\w]/g, ''));

// function pyramid(n, row = 0, level = '') {
//     // Solution 2 - Recursive

//     if (row === n) {
//         return;
//     }

//     if (level.length === 2 * n - 1) {
//         console.log(level);
//         return pyramid(n, row+1);
//     }

//     const midpoint = Math.floor( ( 2 * n - 1 ) / 2 );
//     let add;
//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = '#';
//     } else {
//         add = ' ';
//     }

//     pyramid(n, row, level+add);
// }

// pyramid(3);