// Description:
//     Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]

// Solution

function towerBuilder(nFloors) {
    const res = []
    for (let i = 0; i < nFloors; i++) {
        res.push(' '.repeat(nFloors - i - 1)
            + '*'.repeat(i * 2 + 1)
            + ' '.repeat(nFloors - i - 1));
    }
    return res
    // return res.join("\n") увидеть пирамиду
}


console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(5));
console.log(towerBuilder(0));

