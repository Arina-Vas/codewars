// Description:
//     The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
//     Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//Solution
function duplicateEncode(word){
    const arr = word.toLowerCase().split('');
    let str = '';
    arr.map((elem, index) => {
        if (index ===  arr.indexOf(elem) && index === arr.lastIndexOf(elem)) {
            str += '(';
        }
        else str += ')';
    });
    return str;
}

// return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))