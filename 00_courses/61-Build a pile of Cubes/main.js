// Description:
//     Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of
// n^3, the cube above will have volume of ( n -1 ) ^3 and so on until the top which will have a volume of 1^3
//
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
//
//     The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + ( n -1 ) ^3 + ( n -2 ) ^3 + ... + 1^3 =m  if such a n exists or -1 if there is no such n.
//
// Examples:
//     findNb(1071225) --> 45
//
// findNb(91716553919377) --> -1


// ❗❗❗ Сумма кубов натуральных чисел S = 1^3 + 2^3 + 3^3 + ... + n^3 = (n*(n+1)/2)^2


// Solution:

function findNb(m) {
    // let s = 0;
    // let n = 0;
    // while (s < m) {
    //     n++;
    //     s += n**3
    // }
    //
    // return s === m ?n : (-1);

    let n = 0;
    while (m > 0) {
        ++n
        m-= n**3
    }
    return m ? -1 : n
}

console.log(findNb(4183059834009))
console.log(findNb(24723578342962))
console.log(findNb(135440716410000))
console.log(findNb(1071225))