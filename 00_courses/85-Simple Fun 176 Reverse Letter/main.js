// Description:
//     Task
// Given a string str, reverse it and omit all non-alphabetic characters.
//
//     Example
// For str = "krishan", the output should be "nahsirk".
//
//     For str = "ultr53o?n", the output should be "nortlu".
//
//     Input/Output
//     [input] string str
// A string consists of lowercase latin letters, digits and symbols.
//
//     [output] a string

//Solution

function reverseLetter(str) {
    // return str.split('').filter(letter => (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) || (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) ? letter : '').reverse().join('')
    return str.match(/[a-z]/g).reverse().join('')
}

console.log(reverseLetter("krishan"));
console.log(reverseLetter("ultr53o?n"));