// Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// Solution:
function past(h, m, s) {
    let a = 0;
    let b = 0;
    let c = 0;
    if (0 <= h <= 23) {
        a = h * 60 * 60;
    }
    if (0 <= m <= 59) {
        b = m * 60;
    }
    if (0 <= s <= 59) {
        c = s * 1;
    }
    return result = (a + b + c) * 1000;






}
console.log(past(0, 1, 1));