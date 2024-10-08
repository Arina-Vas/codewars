// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Solution:

function XO(str) {
    str = str.toLowerCase();
    let countO = 0;
    let countX = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'x') {
            countX++;
        }
        else if (str[i] == 'o') {
            countO++;
        }
    }
    if (countO === countX) {
        return true;
    }
    return false;
}
console.log(XO("xxOo"));
console.log(XO('xo'));
console.log(XO("xxXoxxookklmoOkigJOOo"));