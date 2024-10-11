// Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Solution:

// function highAndLow(numbers) {
//     // numArray = Number(numbers);
//     // return numArray;
//     let min = Number(numbers[0]);
//     let max = Number(numbers[1]);
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] = Number(numbers[i]);
//         if (numbers[i] <= min) {
//             min = numbers[i];
//         }
//     }
//     for (let j = 0; j < numbers.length; j++) {
//         numbers[j] = Number(numbers[j]);
//         if (numbers[j] > max) {
//             max = numbers[j];
//         }
//         // min = Math.min(numbers);
//         // max = Math.max(numbers)
//     }
//     let result = max + " " + min;
//     return numbers;
// }

// function highAndLow(numbers) {
//     numbers = numbers.split(' ');
//     const numArray = [];
//     for (let i = 0; i < numbers.length; i++) {
//         numArray.push(Number(numbers[i]))
//     }
//     let min = numArray[0];
//     let max = numArray[0];
//     for (let j = 0; j < numArray.length; j++) {
//         if (numArray[j] < min) {
//             min = numArray[j];
//         }
//         if (numArray[j] > max) {
//             max = numArray[j];
//         }
//     }
//     return max + " " + min;
// }

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    // const numArray = numbers.map(Number);
    return max + " " + min;
}

console.log((highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")));

// console.log(Number("-42"));