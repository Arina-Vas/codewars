// Description:
//     Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
// For example: (Input --> Output)
//
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

//Solution

function sumDigits(number) {
    debugger
    number = Math.abs(number)
    let sum = 0
    while (number >= 1) {
        sum += number%10
        number = Math.floor(number/10)
    }
    return sum

}

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));