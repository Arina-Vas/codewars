// Description:
//     Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
    const numberPart = strng.match(/(\d*)$/)[0]
    const strPart = strng.slice(0, -numberPart.length)
    if (numberPart) {
        return strPart + (+numberPart + 1).toString().padStart(numberPart.length, '0')
    }
    else {
        return strng + 1
    }
    // return res
    // if (!arr.length) {
    //     res = strng + 1
    // } else {
    //     res = strArr.slice(0, strArr.indexOf(arr[0])).join('') + (+arr.join('') + 1).toString().padStart(arr.length, '0')
    // }
    // return res
}

console.log(incrementString('abc1'));
console.log(incrementString('abc'));
console.log(incrementString('abc012'));
console.log(incrementString('foo'));
console.log(incrementString("fo99obar99"));