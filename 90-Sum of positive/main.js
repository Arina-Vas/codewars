// Description:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Solution

function positiveSum(arr) {
return arr.reduce((acc,num) => {
    if (num > 0) {
        acc += num
    }
    return acc;
},0)
}
console.log(positiveSum([]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([-1,-2,-3,-4,-5]));