// Description:
// Create a function that returns the name of the winner in a fight between two fighters.
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.
//
//     Courtesy of projecteuler.net (Problem 1)

// Solution

// function solution(number){
//     let sum = 0;
// if (number <= 0){
//     return 0;
// }
// else {
//     for (let i = 0; i < number; i++) {
//         if (i%3 === 0 || i%5 === 0) {sum += i}
//     }
//     return sum;
// }
// }


function solution(number){
return (number <=0) ? 0 : Array.from({length: number - 1},(_,i) => i+1).filter((n)=> n%3===0 || n%5===0).reduce((acc,cur)=> acc+cur)
}
// Можно создать массив из последовательности чисел, предшествующей заданному числу. Для этого используем Array.from, который в параметры может принимать arrayLike — объект, похожий на массив (например, { length: 5 }) и задающий длину массива и mapFunction — необязательная функция, которая применяется к каждому элементу. Отнимаем единицу, так как само число в массиве нам не нужно
// (_, i) => i + 1
// Это стрелочная функция, которая выступает в роли второго аргумента для Array.from.
//     Она принимает два параметра:  _ — значение текущего элемента (игнорируется, так как массив изначально пустой). ❗❗❗обязательно поставить нижнее подчеркивание, чтобы сработала функция
// i — индекс текущего элемента.
// i + 1 => добавляем в массив числа, начиная с 1
console.log(solution(10));
console.log(solution(15));