// Reversed Strings
// Description:

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Solution:
// function solution(str) {
//     var splitString = str.split("");
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");
//     return joinArray;
// }

// solution("world");
// solution("word");

function solution(str) {
    let strReverse = [];
    for (let i = 0; i < str.length; i++) {
        strReverse.unshift(str[i])
    }
    return strReverse.join("")
}
console.log(solution("world"));
console.log(solution("word"));