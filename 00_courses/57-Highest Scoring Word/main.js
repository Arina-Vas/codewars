// Description:
//     Given a string of words, you need to find the highest scoring word.
//
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//     For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
//     You need to return the highest scoring word as a string.
//
//     If two words score the same, return the word that appears earliest in the original string.
//
//     All letters will be lowercase and all inputs will be valid.

function high(x) {
    const alphabet = Object.fromEntries(
        [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter, index) => [letter, index + 1])
    )
    const wordsArr = x.split(' ')
    const numbers = wordsArr.map((w) => w.toUpperCase().split('').reduce((acc, l) => (acc + alphabet[l]), 0))
    return wordsArr[numbers.indexOf(Math.max(...numbers))]
}

console.log(high('man i need a taxi up to ubud'))