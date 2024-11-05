// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// Solution

function gimme(triplet) {
    let arr = triplet.toSorted((a, b) => a - b); // [...triplet].sort((a, b) => a - b)
    return triplet.indexOf(arr[1]);


    // for (let i = 0; i < triplet.length; i++) {
    //     if (i === 0) {
    //         if ((triplet[i] > triplet[i + 1] && triplet[i] < triplet[triplet.length - 1]) || (triplet[i] < triplet[i + 1] && triplet[i] > triplet[triplet.length - 1])) {
    //             return i;
    //         }
    //     }
    //     else if (i === triplet.length - 1) {
    //         if ((triplet[i] > triplet[i - 1] && triplet[i] < triplet[0]) || (triplet[i] < triplet[i - 1] && triplet[i] > triplet[0])) {
    //             return i;
    //         }
    //     } else {
    //         if ((triplet[i] > triplet[i + 1] && triplet[i] < triplet[i - 1]) || (triplet[i] < triplet[i + 1] && triplet[i] > triplet[i - 1])) {
    //             return i;
    //         }
    //     }
    // }
}
console.log(gimme([15, 5, 14]));