// Description:
//     Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
//
// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function () {
    // if (!this.trim()) return "";
    // const arr = [...this.trim()]
    // arr[0] = arr[0].toUpperCase()
    // arr.forEach((s, i) => {
    //     if (arr[i] === ' ' && arr[i + 1]) {
    //         arr[i] = arr[i + 1].toUpperCase()
    //         arr.splice(i + 1, 1)
    //     }
    // })
    return this.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}


console.log('fgfgf nhfghg '.camelCase())
console.log('test case'.camelCase())
console.log('camel Case method'.camelCase())
console.log('say hello'.camelCase())
console.log('camel case word'.camelCase())
console.log(''.camelCase())
