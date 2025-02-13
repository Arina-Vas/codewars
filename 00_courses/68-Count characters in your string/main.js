// Description:
//     The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.
//
//     Solution

function count(string) {
    if (!string.length) return {}
    const res = {}
    // for (let i = 0; i < string.length; i++) {
    //     if (res[string[i]]) {
    //         res[string[i]] = res[string[i]] + 1;
    //     }
    //     else
    //         res[string[i]] = 1;
    // }
    // return res
    string.split('').forEach((s) => res[s] ? res[s]++ : res[s] = 1)
    return res
}

console.log(count('a'))
console.log(count('ABC'))
console.log(count('abb'))
console.log(count(''))