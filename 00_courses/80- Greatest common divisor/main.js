// Description:
//     Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
//
//     The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x, y) {
    // let res = 0;
    // for (let i = 1; i <= x || i <= y; i++) {
    //     if (x%i === 0 && y%i === 0) {
    //         if (res <= i) {
    //             res = i
    //         }
    //     }
    // }
    // return res;
    if (x%y === 0){
        return y
    }
    else {
        return mygcd(y, x%y);
    }
//      return y === 0 ? x : mygcd(y, x % y)
}

console.log(mygcd(30, 12))
console.log(mygcd(36, 12))
console.log(mygcd(8,  9))
console.log(mygcd(1,  1))