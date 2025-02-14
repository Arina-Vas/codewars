// Description:
//     Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//
//     Example 1:
// a1 = ["arp", "live", "strong"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns ["arp", "live", "strong"]
//
// Example 2:
// a1 = ["tarp", "mice", "bull"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns []
//
// Notes:
//     Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
//     In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
//     Beware: In some languages r must be without duplicates.

//Solution
function inArray(array1, array2) {
    // const r = []
    // for (let i = 0; i < array1.length; i++) {
    //     array2.map(el => {
    //         if (el.includes(array1[i])) {
    //             if (!r.includes(array1[i]))  r.push(array1[i])
    //         }
    //     })
    // }
    // return r.sort()
    return array1.filter(a1 => array2.find(a2 => a2.includes(a1))).sort()
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["strong", "arp", "live"], ["lively", "alive", "harp", "sharp", "armstrong"]))