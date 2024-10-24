// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// Solution

// function correctPolishLetters(string) {
//     let arr = [...string]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "ą") {
//             arr[i] = "a"
//         }
//         if (arr[i] === "ć") {
//             arr[i] = "c"
//         }
//         if (arr[i] === "ę") {
//             arr[i] = "e"
//         }
//         if (arr[i] === "ł") {
//             arr[i] = "l"
//         }
//         if (arr[i] === "ń") {
//             arr[i] = "n"
//         }
//         if (arr[i] === "ó") {
//             arr[i] = "o"
//         }
//         if (arr[i] === "ś") {
//             arr[i] = "s"
//         }
//         if (arr[i] === "ź") {
//             arr[i] = "z"
//         }
//         if (arr[i] === "ż") {
//             arr[i] = "z"
//         }
//     }
//     return arr.join('');
// }



// function correctPolishLetters(string) {
//     let arr = [...string]
//     let result = arr.map((x) => (x === "ą") ? x = "a" : (x === "ć") ? x = "c" : (x === "ę") ? x = "e" :(x === "ł") ? x = "l" :(x === "ó") ? x = "o" :(x === "ś") ? x = "s" :(x === "ź") ? x = "z" :(x === "ż") ? x = "z" : (x === "ń") ? x = "n" : x)
//     return result.join('');
// }

// console.log(correctPolishLetters("Jędrzej Błądziński"));

function correctPolishLetters(string) {
    debugger
    let arr = [...string];
    let letters = {
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ł": 'l',
        "ń": "n",
        "ó": "o",
        "ś": "s",
        "ź": "z",
        "ż": "z"
    }
    let result = arr.map((x) => letters[x] || x) 
    debugger;
    return result.join('');
}

console.log(correctPolishLetters("Jędrzej Błądziński"));