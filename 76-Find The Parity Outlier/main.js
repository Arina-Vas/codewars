function findOutlier(integers) {
    // let odd = [];
    // let even = [];
    // integers.forEach(el => {
    //     if (el % 2 === 0) {
    //         even.push(el);
    //     }
    //     else odd.push(el);
    // });
    // if (odd.length < even.length) {
    //     return odd[0]
    // }
    // else {
    //     return even[0]
    // }
    let odd = integers.filter((el) => !(el % 2 === 0))
    let even = integers.filter((el) => (el % 2 === 0))
    if (odd.length < even.length) {
        return odd[0]
    }
    else {
        return even[0]
    }
}

console.log(findOutlier([0, 1, 2]));