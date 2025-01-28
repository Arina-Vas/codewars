// Description:
//     Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
//     Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
//     Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
//
// Solution:

function order(words){
    return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');

}
// function order(words){
// const wordArr = words.split(' ');
// return wordArr.reduce((acc, word) => {
//     acc[+(word.split('').find(item => /[1-9]/.test(item))) - 1] = word;
//     return acc;
// },[]).join(' ');
// wordArr.map(word => word.includes(/1-9/));}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));