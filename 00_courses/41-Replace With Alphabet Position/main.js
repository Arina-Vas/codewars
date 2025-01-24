function alphabetPosition(text) {
    const textN = text.toUpperCase()
    let numbers = ''
    let code = 0;
    for (let i = 0; i < text.length; i++) {
        code = textN.charCodeAt(i)
        if (code > 64 && code < 91) {
            numbers += (code - 64) + ' '
        }
    }
    return numbers.trim();
}

// function alphabetPosition(text) {
//     const textArr = text.toLowerCase().split('');
//     const alphabet = {
//         a: '1',
//         b: '2',
//         c: '3',
//         d: '4',
//         e: '5',
//         f: '6',
//         g: '7',
//         h: '8',
//         i: '9',
//         j: '10',
//         k: '11',
//         l: '12',
//         m: '13',
//         n: '14',
//         o: '15',
//         p: '16',
//         q: '17',
//         r: '18',
//         s: '19',
//         t: '20',
//         u: '21',
//         v: '22',
//         w: '23',
//         x: '24',
//         y: '25',
//         z: '26'
//     }
//     let numbers = ''
//     for (let t of textArr) {
//         if (alphabet.hasOwnProperty(t)) {
//             numbers += alphabet[t] + ' ';
//         }
//     }
//     return numbers.trim();
// }

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
