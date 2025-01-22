// Description:
//     Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
//
//     Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
//
// Solution:

//❗❗❗метод toString(radix) преобразует число в строку в системе счисления с основанием, указанным в аргументе radix. Когда вы вызываете toString(2), число преобразуется в двоичное представление (основание 2).
// Когда вы вызываете toString(2), число преобразуется в строку, содержащую его двоичное представление (0 и 1).
// Вы можете использовать toString() с любым основанием от 2 до 36.
// Преобразование в строки упрощает работу с различными системами счисления.

// const countBits = function (n) {
//     let numBi = []
//     while (n > 0) {
//         numBi.push(n % 2)
//         n = Math.floor(n / 2);
//     }
//     return numBi.reduce((acc, n) => acc + n, 0)
// }

countBits = n => n.toString(2).split('0').join('').length;


    console.log(countBits(37510))
    console.log(countBits(1234))