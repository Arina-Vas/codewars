// Description:
//     Acknowledgments:
//         I thank yvonne-liu for the idea and for the example tests :)
//
// Description:
//     Encrypt this!
//
//     You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//
//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//     The first letter must be converted to its ASCII code.
//     The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
//     encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = function (text) {
    return text.split(' ').reduce((acc, w) => {
        acc.push(w.charCodeAt(0) +
            (w.length > 2 ?
                w[w.length - 1] + w.slice(2, -1) + w[1] :
                w.slice(1).split('').reverse().join('')))
        return acc;
    }, []).join(' ')
}
console.log(encryptThis("Hello"))
console.log(encryptThis("hello world"))
console.log(encryptThis("A"))
console.log(encryptThis("A wise old owl lived in an oak"))