// Description:
//     Your task is to write function factorial.
//
// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
    // if (n === 1 || n === 0) return 1;
    // return n * factorial(n - 1)

    return n ? factorial(n - 1) * n : 1;
}

console.log(factorial(7))
console.log(factorial(1))
console.log(factorial(3))