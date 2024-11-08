// Description:
// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// Solution

function sumNoDuplicates(numList) {
    const newArray = numList.filter((el) => {
        if (numList.indexOf(el) === numList.lastIndexOf(el)) {
            return el;
        }
    })
    return newArray.reduce((acc, el) => acc + el, 0)
    // let newArray = [];
    // for (let i = 0; i < numList.length; i++) {
    //     if (numList.indexOf(numList[i]) === i && numList.lastIndexOf(numList[i]) === i) {
    //         newArray.push(numList[i])
    //     }
    // }
    // return newArray.reduce((acc, el) => acc + el);
}
console.log(sumNoDuplicates([3, 4, 3, 6]));
console.log(sumNoDuplicates([1, 10, 3, 10, 10]));
console.log(sumNoDuplicates([1, 9, 9, 5, 7, 7, 6, 1, 5, 6]));
console.log(sumNoDuplicates([]));