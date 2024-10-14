// Description:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Solution:
function findShort(s) {
    s = s.split(" ");
    let min = s[0].length;
    for (let i = 0; i < s.length; i++) {
        if (s[i].length < min) {
            min = s[i].length;
        }
    } return min;
}
console.log((findShort("bitcoin take over the world maybe who knows perhaps")));