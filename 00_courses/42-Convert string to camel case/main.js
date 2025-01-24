// Description:
//     Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//
//     Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
//
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// Solution
function toCamelCase(str) {
    const camelCase = str.split('');
    return camelCase.map((s,i) => {
        if (camelCase[i-1] === '-' || camelCase[i-1] === '_') {
            return s.toUpperCase();
        }
        else return s
    }).join('').replace(/[_-]/g, '');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));

