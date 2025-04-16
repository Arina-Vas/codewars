// Description:
//     Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
//
// Your task is to process a string with "#" symbols.
//
//     Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
return [...s].reduce((acc, el) => (el !== '#') ? acc + el : acc.slice(0, -1), '')
}

console.log(cleanString('abc#d##c'))
console.log(cleanString('abc####d##c#'))