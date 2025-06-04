// Description:
//     Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
//     Note: no empty arrays will be given.
//
//     Examples
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//Solution
function highestRank(arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        } else obj[arr[i]] = 1
    }
    let max = Math.max(...Object.values(obj))
    let res = null
    for (const [num, count] of Object.entries(obj)) {
        if (
            count > max ||
            (count === max && Number(num) > res)
        ) {
            max = count;
            res = Number(num);
        }
    }
    return res

}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([3,12,25,2,2,2,16,16,14,5,23,22,12,12,13,16,4,19]));