// Description:
//     Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
//     Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.
//     Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    const letters = {}
    for (let s of str1){
        if(letters[s]) {
            letters[s] += 1;
        }
        else {
            letters[s] = 1
        }
    }
    for (let s of str2){
        if(!letters[s]) {
            return false
        }
        else {
            letters[s] -= 1
        }
    }
    return true
}

console.log(scramble('rkqodlw', 'world'))
console.log(scramble('javscripts', 'javascript'))

let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
let s2 = "zyxcba".repeat(9_000);
console.log(scramble(s1, s2))