// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Solution

function reverseWords(str) {
    let array = str.split(' ');
    let result = [];
    let word = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== " ") {
            word = [...array[i]];
            result.push(word.reverse().join(''));
        }
        else {
            result.push(array[i])
        }
    }
    return result.join(' ');

}
// console.log(reverseWords('apple'));
// console.log(reverseWords('double  spaced  words'));

console.log(reverseWords('double  spaced  words'));