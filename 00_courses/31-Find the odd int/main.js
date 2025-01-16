// Description:
//     Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.
//
//     Examples
//     [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//
// Solution
function findOdd(arr) {
    return arr.find((num) => arr.filter(el => el === num).length % 2)
}

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// XOR (исключающее ИЛИ) — это логическая операция, которая выполняется побитно над числами. Она возвращает 1 только в тех случаях, когда значения битов разные. Если биты одинаковые, результат будет 0.
// Логическая таблица XOR
// рассмотрим, как работает XOR побитно:
// Бит A	Бит B	A XOR B
// 0	0	0
// 0	1	1
// 1	0	1
// 1	1	0

console.log(findOdd([1,1,2]))