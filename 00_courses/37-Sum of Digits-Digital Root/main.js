// Description:
//     Digital root is the recursive sum of all the digits in a number.
//
//     Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//
//     Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
//
// Solution:

function digitalRoot(n) {
    // while (n >= 10) {
    //     let sum = 0
    //     while (n > 0) {
    //         sum += (n % 10)
    //         n = Math.floor(n / 10)
    //     }
    //     n = sum
    // }
    // return n

    return (n - 1) % 9 + 1

}


console.log(digitalRoot(16)) //7
console.log(digitalRoot(132189)) //6
console.log(digitalRoot(456)) //6

//n−1: Это сдвиг числа так, чтобы числа, кратные 9, обрабатывались правильно. Например, цифровой корень 9 равен 9, а не 0. Убираем это несоответствие, смещая n на 1.делимость числа на 9 определяется суммой его цифр. Если сумма цифр больше 9, мы можем продолжить процесс сложения (или взять остаток от деления на 9)