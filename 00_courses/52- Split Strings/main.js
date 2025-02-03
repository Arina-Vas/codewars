// Description:
//     Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// Solution

// function solution(str) {
//     if (str.length % 2 !== 0) {
//         str += '_'
//     }
//     const s = str.split('')
//     let res = []
//     while (s.length > 0) {
//         res.push(s.splice(0,2).join(''))
//     }
//     return res
// }

function solution(str) {
    if (str.length % 2 !== 0) str += '_';
    return str.match(/.{1,2}/g) || [];

    // return (s+"_").match(/.{2}/g)||[]
}

//           / и / — это ограничители регулярного выражения.
//           . — означает «любой символ».
//           {1,2} — означает «группировать по 1 или 2 символа» (то есть разбиваем строку на подстроки длиной максимум 2 символа).

console.log(solution('abc'));
console.log(solution('abcdef'));