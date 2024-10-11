// Description:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// Solution:
function squareDigits(num) {
    // const str = num.toString();
    const numStr = Array.from(num.toString());
    for (let i = 0; i < numStr.length; i++) {
        numStr[i] = (Number(numStr[i])) * (Number(numStr[i]))
    }
    num = numStr.join(""); // все равно соединяет в строку и нужно перевести в число, чтобы ответ был принят
    num = Number(num);

    return num;
}
console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));