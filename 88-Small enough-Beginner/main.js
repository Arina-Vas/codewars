// Description:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Solution

function smallEnough(a, limit) {
    let count = 0;
    a.map((el) => {
        if (el > limit) {
            count++;
        }
    })
    if (count > 0) {
        return false;
    }
    return true;
}
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > limit) {
//         count++;
//     }
// }
// if (count > 0) {
//     return false;
// }
// return true;
// }
console.log(smallEnough([66, 101], 200));