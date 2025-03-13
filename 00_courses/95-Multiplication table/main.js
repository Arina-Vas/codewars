// Description:
//     Your task, is to create N×N multiplication table, of size provided in parameter.
//
//     For example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
//
//     [[1,2,3],[2,4,6],[3,6,9]]

//Solution

function multiplicationTable(size) {
    const res = []
    let temp = []
    for (let j = 1; j <= size; j++) {
        for (let i = size; i > 0; i--) {
            temp.push(i*j)
        }
        res.push(temp.reverse())
        temp = []
    }
    return res // insert code here
}

console.log(multiplicationTable(3));