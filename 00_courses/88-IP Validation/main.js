// Description:
//     Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
//
//     Valid inputs examples:
//     Examples of valid inputs:
//     1.2.3.4
// 123.45.67.89
// Invalid input examples:
//     1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
//     Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

//Solution

function isValidIP(str) {
    const arr = str.split('.')
    let res = 0
    if (arr.length !== 4) return false
    res = arr.reduce((a, b) => {
        if (+b >= 0 && +b <= 255 && b.match(/^\d+$/) && String(Number(b)) === b) {
            a += 1
        }
        return a
    }, 0)
    return res === 4
}

// console.log(isValidIP("0.0.0.0"));
// console.log(isValidIP("12.255.56.1"));
// console.log(isValidIP("137.255.156.100"));
// console.log(isValidIP(''));
// console.log(isValidIP('abc.def.ghi.jkl'));
// console.log(isValidIP('123.456.789.0'));
// console.log(isValidIP('12.34.56'));
console.log(isValidIP('01.02.03.04'));
// console.log(isValidIP('256.1.2.3'));
// console.log(isValidIP('1.2.3.4.5'));
// console.log(isValidIP('123,45,67,89'));
//
//
// console.log(isValidIP('1e0.1e1.1e2.2e2'));
// console.log(isValidIP(' 1.2.3.4'));
// console.log(isValidIP('1.2.3.4 '));
// console.log(isValidIP('12.34.56.-7'));
// console.log(isValidIP('1.2.3.4\n'));
// console.log(isValidIP('\n1.2.3.4'));



