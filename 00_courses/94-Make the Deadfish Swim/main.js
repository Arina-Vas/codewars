// Description:
//     Create a parser to interpret and execute the Deadfish language.
//
//     Deadfish operates on a single value in memory, which is initially set to 0.
//
// It uses four single-character commands:
//
//     i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.
//
//     Examples
// Program "iiisdoso" should return numbers [8, 64].
//     Program "iiisdosodddddiso" should return numbers [8, 64, 3600].

//Solution

function parse(data) {
    // const res = []
    // let num = 0
    // const actions = data.split('')
    // // for ( let i = 0; i < actions.length; i++ ) {
    // //     if (actions[i] === 'i') {
    // //         num += 1
    // //     }
    // //     if (actions[i] === 'd') {
    // //         num -= 1
    // //     }
    // //     if (actions[i] === 's') {
    // //         num *= num
    // //     }
    // //     if (actions[i] === 'o') {
    // //         res.push(num)
    // //     }
    // // }
    // return res; // your code here
    const res = []
    data.split('').reduce((num, s) => {
        if (s === 'i') {
            num += 1
        }
        if (s === 'd') {
            num -= 1
        }
        if (s === 's') {
            num *= num
        }
        if (s === 'o') {
            res.push(num)
        }
        return num
    }, 0)
    return res
}

console.log(parse("iiisdoso"));
console.log(parse("iiisdosodddddiso"));