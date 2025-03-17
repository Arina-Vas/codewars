// Description:
//     The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
//
// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
//
// If
//
// sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
//     Examples:
// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> ""
// ("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
//     s = "123456" gives "234561".

//solution

const getStr = (s) => {
    let res = '';
    let sum = 0;
    s.forEach(n => {
        sum += Number(n);
    })
    if (sum % 2 === 0) {
        res += s.reverse().join('')
    } else {
        res += (s.join('').slice(1, s.length) + s[0])
    }
    return res
}

function revrot(str, sz) {
    if (!str.length || sz > str || sz < 1) return ''
    let frArr = []
    while (str.length > 0) {
        frArr.push(str.split('').splice(0, sz))
        str = str.slice(sz,str.length)
    }
    return frArr.reduce((acc,fr) => {
        let part = getStr(fr)
       acc += part.length >= sz ? part : ''
        return acc;
    },'')
}

// console.log(revrot("123456987653", 6))
// console.log(revrot("123456987654", 6))
console.log(revrot("563000655734469485", 4))
console.log(revrot("66443875", 4))
// console.log(revrot("66443875", 8))
// console.log(revrot("664438769", 8))
// console.log(revrot("123456779", 8))
// console.log(revrot("", 8))
// console.log(revrot("123456779", 0))
