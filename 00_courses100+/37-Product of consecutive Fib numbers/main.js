// Description:
// The Fibonacci numbers are the numbers in the following integer sequence (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
//
// such that:
//
// F
// (
// 0
// )
// =
// 0
// F
// (
// 1
// )
// =
// 1
// F
// (
// n
// )
// =
// F
// (
// n
// −
// 1
// )
// +
// F
// (
// n
// −
// 2
// )
// F(0)=0
// F(1)=1
// F(n)=F(n−1)+F(n−2)
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying:
//
// F
// (
// n
// )
// ∗
// F
// (
// n
// +
// 1
// )
// =
// p
// r
// o
// d
// F(n)∗F(n+1)=prod
// Your function takes an integer (prod) and returns an array/tuple (check the function signature/sample tests for the return type in your language):
//
// if F(n) * F(n+1) = prod:
// (F(n), F(n+1), true)
// If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:
// (F(n), F(n+1), false)
// where F(n) is the smallest one such as F(n) * F(n+1) > prod.
// Examples:
// 714 ---> (21, 34, true)
// --> since F(8) = 21, F(9) = 34 and 714 = 21 * 34
//
// 800 --->  (34, 55, false)
// --> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

function productFib(prod) {
    // let a = 0
    // let b = 1
    // while (a * b < prod) {
    //     let sum = a + b
    //     a = b
    //     b = sum
    // }
    // if (a * b === prod) {
    //     return [a, b, true]
    // }
    // return [a, b, false]

    let [a,b] = [0,1]
    while (a*b < prod) {
        [a,b] = [b,a+b]
    }
    return [a,b, a*b === prod]
}

console.log(productFib(4895))

const fib = (num) => {
    if (num < 2) return num
    let a = 0
    let b = 1
    debugger
    for (let i = 2; i < num + 1; i++) {
        [a, b] = [b, a+b]
    }
    return b
    // const res = []
    // debugger
    // for (let i = 0; i < num + 1; i++) {
    //     if (res.length < 2) {
    //         res.push(i)
    //     } else {
    //         res.push(res[i - 1] + res[i - 2])
    //     }
    //
    // }
    // return res[res.length - 1]
}


console.log(fib(8))
console.log(fib(9))