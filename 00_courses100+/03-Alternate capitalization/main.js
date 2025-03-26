// Description:
//     Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!
//
//     If you like this Kata, please try:
//
// Indexed capitalization
//
// Even-odd disparity

function capitalize(s) {
    // const arr = s.split('')
    // let StR = ''
    // let sTr = ''
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2) {
    //         sTr += arr[i].toUpperCase()
    //         StR += arr[i]
    //     }
    //     else {
    //         sTr += arr[i]
    //         StR += arr[i].toUpperCase()
    //     }
    // }
    // return [StR, sTr];
    const arr = s.split('')
    return [
        arr.map((el,i) => i%2 ? el : el.toUpperCase()).join(''),
        arr.map((el,i) => i%2 ? el.toUpperCase() : el).join('')
    ]
    // return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
}

console.log(capitalize("abcdef"))