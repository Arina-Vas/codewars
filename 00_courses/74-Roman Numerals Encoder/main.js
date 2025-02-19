// Description:
//     Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
//
//     Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.
//
//     In Roman numerals:
//
//     1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
//     Example:
//
// 1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"
// Help:
//
//     Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(number) {
    let res = ''
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    for (let i = 0; i < romanNumerals.length; i++) {
        while (number >= romanNumerals[i].value) {
            res += romanNumerals[i].symbol;
            number -= romanNumerals[i].value;
        }
    }
    return res;
    // const romNum = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}
    // while (number > 0) {
    //     for (let i in romNum) {
    //         if (number >= romNum[i]) {
    //             res += i
    //             number -= romNum[i]
    //             break
    //         }
    //     }
    // }
}

console.log(solution(1))
// console.log(solution(10))
// console.log(solution(50))
// console.log(solution(5))
console.log(solution(1666))
console.log(solution(666))
// console.log(solution(2008))