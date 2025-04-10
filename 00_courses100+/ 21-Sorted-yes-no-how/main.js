// Description:
//     Complete the method which accepts an array of integers, and returns one of the following:
//
//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    const arr = array.join('')
    const arrSortedAsc = array.sort((a, b) => a - b).join('');
    const arrSortedDesc = array.sort((a, b) => b - a).join('');
    return arr === arrSortedDesc ? "yes, descending" :  arr === arrSortedAsc ? "yes, ascending" : 'no'
}

console.log(isSortedAndHow([1, 2]))
console.log(isSortedAndHow([15, 7, 3, -8]))
console.log(isSortedAndHow([4, 2, 30]))
// console.log(isSortedAndHow([1, 2]))