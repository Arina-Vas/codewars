// Description:
//     Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//
//     It should remove all values from list a, which are present in list b keeping their order.
//
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//
//     arrayDiff([1,2,2,2,3],[2]) == [1,3]
//
// Solution:

function arrayDiff(a, b) {
    // if (!b.length) {
    //     return a
    // } else {
    //     return a.reduce((acc, curr) => {
    //         if (!b.includes(curr)) {
    //             acc.push(curr);
    //         }
    //         return acc;
    //     }, []);
    // }
    return a.filter(el => !b.includes(el));
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1, 2]));
console.log(arrayDiff([1, 2, 2], []));
console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
console.log(arrayDiff([1, 2, 3, 4], [1, 2]));
