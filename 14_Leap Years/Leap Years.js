// Description:
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

// Solution:

function isLeapYear(year) {
    let ost4 = year % 4;
    let ost100 = year % 100;
    let ost400 = year % 400;
    if (ost4 === 0 && ost100 !== 0) {
        return true;
    }
    if (ost100 === 0 && ost400 !== 0) {
        return false;
    }
    if (ost4 !== 0 && ost400 !== 0) {
        return false;
    }
    if (ost4 === 0 && ost400 === 0) {
        return true;
    }
}
console.log(isLeapYear(3126));
console.log(isLeapYear(2024));