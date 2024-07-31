// Two to One
// Description:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Solution:
function longest(s1, s2) {
    let res = "";
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < abc.length; i++) {
        if (s1.includes(abc[i]) || s2.includes(abc[i])) {
            res += abc[i];
        }
    }
    return res;
}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));