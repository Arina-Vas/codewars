// Description:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Solution:

// function boolToWord(bool) {
//     if (bool) {
//         return "Yes";
//     }
//     else if (!bool) {
//         return "No";
//     }
// }

// console.log(boolToWord(false));
// console.log(boolToWord(true));
// console.log(boolToWord(null));

function boolToWord(bool) {
    return bool ? "Yes" : "No"
}