// Description:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// Solution:

function sumTwoSmallestNumbers(numbers) {
    // let min1 = numbers[0];
    // let min2 = numbers[1];
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] < min1) {
    //         min1 = numbers[i];
    //     }
    // }
    // for (let j = 0; j < numbers.length; j++) {
    //     if (numbers[j] > min1 && numbers[j] < min2) {
    //         min2 = numbers[j]
    //     }
    // }
    // return min1 + min2;

// первое решение не прошло, возможно как-то поменяла массив..?

    min1 = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min1), 1);
    min2 = Math.min(...numbers);
    return min1 + min2;
}

console.log((sumTwoSmallestNumbers([5, 8, 12, 19, 22])));
console.log((sumTwoSmallestNumbers([15, 28, 4, 2, 43])));
console.log((sumTwoSmallestNumbers([23, 71, 33, 82, 1])));
console.log((sumTwoSmallestNumbers([3, 87, 45, 12, 7])));
console.log((sumTwoSmallestNumbers([52, 76, 14, 12, 4])));