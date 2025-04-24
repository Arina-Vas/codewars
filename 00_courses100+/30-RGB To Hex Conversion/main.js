// Description:
//     The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
//
//     Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
//
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
    // const symbols = {
    //     10: 'A',
    //     11: 'B',
    //     12: 'C',
    //     13: 'D',
    //     14: 'E',
    //     15: 'F'
    // }
    // let s = '';
    // let n = 0;
    // [r, g, b].forEach(el => {
    //         let res = []
    //         if (el <= 0) {
    //             s += '00';
    //         }
    //         while (el > 0) {
    //             if (el > 255) {
    //                 el = 255;
    //             }
    //             n = Math.floor(el % 16)
    //             n < 10 ? res.unshift(n) : res.unshift(symbols[n])
    //             el = Math.floor(el / 16)
    //         }
    //         s += res.join('')
    //     }
    // )
    // return s
    const convertToHex = (el) => {
        return Math.max(0, Math.min(255,el)).toString(16).padStart(2, "0").toUpperCase();
    }
    return convertToHex(r)+convertToHex(g)+convertToHex(b)
}

console.log(rgb(255, 255, 255))
console.log(rgb(300, 255, 255))
console.log(rgb(0, 0, 0))
console.log(rgb(173, 255, 47))