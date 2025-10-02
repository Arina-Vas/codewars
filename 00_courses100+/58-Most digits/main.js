// Description:
//     Find the number with the most digits.
//
//     If two numbers in the argument array have the same number of digits, return the first one in the array.\

function findLongest(array){
    return array.reduce((long, cur) => {
       return cur.toString().length > long.toString().length ? cur : long
    })
}

console.log(findLongest([100,20,30,400]));
console.log(findLongest([111, 22, 33, 444])); // 111 (первый с длиной 3)
