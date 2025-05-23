// Description:
//     ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
//     Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    return message.split('').reduce((res, char) => {
        const code = char.charCodeAt(0);
        let symbPositionFromAlphabet = 0
        if (code > 64 && code < 91) { // A-Z
            symbPositionFromAlphabet = (code - 65 + 13) % 26
            res += String.fromCharCode(symbPositionFromAlphabet + 65)
        } else if (code >= 97 && code <= 122) { // a-z
            symbPositionFromAlphabet = (code - 97 + 13) % 26
            res += String.fromCharCode(symbPositionFromAlphabet + 97)
        } else res += char

        return res; // не буква — оставляем как есть
    }, '');
}

console.log(rot13("input"))
console.log(rot13("Hello, World!"))
console.log('i'.charCodeAt(0));