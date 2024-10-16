// Description:
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// Solution:

// ❗❗❗Для того, чтобы преобразовать число из десятичной системы счисления в двоичную, необходимо выполнить следующие действия.

// Делим десятичное число на 2 и записываем остаток от деления.
// Результат деления вновь делим на 2 и опять записываем остаток.
// Повторяем операцию до тех пор пока результат деления не будет равен нулю.
// Запишем полученные остатки в обратном порядке и получим искомое число.
// Переведем число 37510 в двоичную систему:

// 375 / 2 = 187 (остаток 1)
// 187 / 2 = 93 (остаток 1)
// 93 / 2 = 46 (остаток 1)
// 46 / 2 = 23 (остаток 0)
// 23 / 2 = 11 (остаток 1)
// 11 / 2 = 5 (остаток 1)
// 5 / 2 = 2 (остаток 1)
// 2 / 2 = 1 (остаток 0)
// 1 / 2 = 0 (остаток 1)
// Записываем остатки в обратном порядке, получаем результат: 1011101112 ❗❗❗

function addBinary(a, b) {
    let sum = (a + b);
    let y = 0; //sum - (Math.floor((sum / 2))) * 2;
    let sumBinary = [];
    for (; sum > 0;) {
        y = sum - (Math.floor((sum / 2))) * 2;
        sum = Math.floor(sum / 2);
        sumBinary.unshift(y);
    }
    let sumB = sumBinary.join('');
    return sumB;
}
console.log(addBinary(5, 9));
// console.log(toString(5));
