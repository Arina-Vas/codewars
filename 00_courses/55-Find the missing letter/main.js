// Description:
//     Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//
//     You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
//
// Example:
//
//     ['a','b','c','d','f'] -> 'e'
//     ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!

//Solution

function findMissingLetter(array)
{
    const isLowerCase = array[0] === array[0].toLowerCase()
    const alphabet = isLowerCase ? 'abcdefghijklmnopqrstuvwxyz' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const index = alphabet.indexOf(array[0]);
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== alphabet[index + i]) {
            return  alphabet[index + i]
        }
    }
}

// ❗❗❗charCodeAt
// function findMissingLetter(array) {
//   let first = array[0].charCodeAt(0)
//   for (let i = 1; i < array.length; i++) {
//     if (first + i !== array[i].charCodeAt(0)) {
//       return String.fromCharCode(first + i)
//     }
//   }
//  }

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));