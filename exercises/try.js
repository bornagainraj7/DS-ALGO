// var a = '20';
// var b = '10';
// console.log(a+b); // o/p: 2010
// console.log(a-b); // o/p: 10


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


// function matrix(n) {
//     const results = [];

//     for (let i = 0; i < n; i++) {
//         results.push([]);
//     }

//     let counter = 1;
//     let startColumn = 0;
//     let endColumn = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;

//     while (startColumn <= endColumn && startRow <= endRow) {
//         // Top row 
//         for (let i = startColumn; i <= endColumn; i++) {
//             results[startRow][i] = counter;
//             counter++
//         }
//         startRow++;

//         // Right Column 
//         for (let i = startRow; i <= endRow; i++) {
//             results[i][endColumn] = counter;
//             counter++;
//         }
//         endColumn--;

//         // Bottom Row 
//         for (let i = endColumn; i >= startColumn; i--) {
//             results[endRow][i] = counter;
//             counter++
//         }
//         endRow--;

//         // Start column 
//         for (let i = endRow; i >= startRow; i--) {
//             results[i][startColumn] = counter;
//             counter++;
//         }
//         startColumn++;
//     }

//     return results;
// }

// console.log(matrix(5));


// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(6));

// let care = function* numbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// console.log(typeof care);

// bubblesort 
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1 - i); j++) {
            if (arr[j] > arr[j+1]) {
                let lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
}

bubbleSort([100, -40, 500, -124, 0, 21, 7]);