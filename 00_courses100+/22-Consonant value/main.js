// Description:
//     Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
//
//     We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
//
// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"
//
// "zodiac" -> 26
// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.
//
// "strength" -> 57
// The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
//
// For C: do not mutate input.
//
//     More examples in test cases. Good luck!
//
//     If you like this Kata, please try:


const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
}

function solve(s) {
    return s.split(/[aeiou]/gi).map(w => w.split('').map(el => alphabet[el]).reduce((a, b) => a + b,0)).sort((a, b) => b - a)[0]
    // return s.split(/[aeiou]/gi).map(w => [...w].reduce((a, b) => a + (b.charCodeAt() - 96),0)).sort((a, b) => b - a)[0] дольше

}

console.log(solve("zodiac"));
console.log(solve("chruschtschov"));