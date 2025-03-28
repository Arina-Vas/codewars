// Description:
//     Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
//
//     Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.
//
//     Examples
//     [13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is
// 13
// +
// 49
//     =
//     62
// 13+49=62 and the total weight of team 2 is
// 27
// 27.
//     [50, 60, 70, 80] returns [120, 140] or (120, 140) (depending on your language) because the total weight of team 1 is
// 50
// +
// 70
//     =
//     120
// 50+70=120 and the total weight of team 2 is
// 60
// +
// 80
//     =
//     140
// 60+80=140.
//     [80] returns [80, 0] or (80, 0) (depending on your language) because the total weight of team 1 is
// 80
// 80 and the total weight of team 2 is
// 0
// 0.

function rowWeights(array) {
   // let res1 = 0
   //  let  res2 = 0
   //  array.map((n, i) => i % 2 ? res2 += n : res1 += n)
   //  return [res1, res2]
    return array.reduce((a, b,i) => {
        a[i % 2] += b
        return a
    }, [0,0]);
}

console.log(rowWeights([100, 50]))
console.log(rowWeights([50, 60, 70, 80]))
