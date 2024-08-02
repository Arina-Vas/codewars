// Find Maximum and Minimum Values of a List
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

// Solution:
var min = function (list) {
    var min1 = list[0];
    for (i = 1; i < list.length; i++) {


        if (min1 > list[i]) {
            min1 = list[i];

        }
    }

    return min1;
}
var max = function (list) {
    var max1 = list[0];
    for (j = 1; j < list.length; j++) {

        if (max1 < list[j]) {
            max1 = list[j];

        }
    }

    return max1;
}

console.log(min([9, 1, 2, 5, 7, 8, 0, 4, 56]));
console.log(max([9, 1, 2, 5, 7, 8, 0, 4, 56]));
