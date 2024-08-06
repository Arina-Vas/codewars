// Simple multiplication
// Description:
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Solution:
function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8;
    }
    else {
        return number * 9;
    }
}
console.log(simpleMultiplication(7));
console.log(simpleMultiplication(6));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(5));