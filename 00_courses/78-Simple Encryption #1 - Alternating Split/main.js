function encrypt(text, n) {
    if (!text.length || n <= 0) return text;
    let odd = ''
    let even = ''
    while (n > 0) {
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                even += text[i]
            } else odd += text[i]
        }
        text = `${odd}${even}`
        odd = ''
        even = ''
        --n
    }
    return text
}

function decrypt(encryptedText, n) {
    if (!encryptedText.length || n <= 0) return encryptedText;
    let odd = ''
    let even = ''
    let text = ''
    let mid = Math.floor(encryptedText.length / 2);
    while (n > 0) {
        odd = encryptedText.slice(0, mid)
        even = encryptedText.slice(mid)
        for (let i = 0; i < even.length; i++) {
            text += even[i]
            if (odd[i]) text += odd[i]
        }
        encryptedText = text
        text = ''
        --n
    }
    return encryptedText

}

// console.log(encrypt("012345", 1))
// console.log(encrypt("ykjj", 0))
// console.log(encrypt("012345", 2))
// console.log(encrypt("012345", 3))
// console.log(encrypt("01234", 2))

console.log(decrypt("hsi  etTi sats!", 1))