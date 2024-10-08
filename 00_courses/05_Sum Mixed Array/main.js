// Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Solution:
// function sumMix(x) {

//     let sum1 = 0;
//     let sum2 = 0;
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (Number.isInteger(x[i])) {
//             sum1 += x[i];
//         }
//         else {
//             sum2 += Number(x[i])
//         }

//     }
//     return sum = sum1 + sum2;
// }
// console.log(sumMix([9, 3, "7", "3"]));

function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i])            
    }
    return sum;
}
console.log(sumMix([9, 3, "7", "3"]));