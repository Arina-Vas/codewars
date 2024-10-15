// Description:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// Solution:

function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
    return false;
}
// https://www.fileformat.info/info/charset/UTF-16/list.htm 
for (let i = 0; i < pin.length; i++) {
    if (pin[i] < '0' || pin[i] > '9') {                                               //(!Number.isInteger(Number(pin[i])) || pin[i] === " ") {
        return false;
    }
}
return true;
}
console.log(validatePIN("a234"));
console.log(validatePIN("1"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("123456"));
console.log(validatePIN("0000"));
console.log(validatePIN("000 "));
console.log(validatePIN("2 36 "));


console.log(Number.isInteger(Number(" ")));