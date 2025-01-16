// Description 6q:
//     Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text) {
    const arr = text.toLowerCase().split('').sort();
    const duplicateChars = [];
    arr.map((elem, index) => {
        if (arr[index + 1] === elem) {
            if (!duplicateChars.includes(elem))
            duplicateChars.push(elem);
        }
    });
    return duplicateChars.length;
}

// console.log(duplicateCount('aabbcde'));
// console.log(duplicateCount('abcde'));
// console.log(duplicateCount(''));
// console.log(duplicateCount('aabBcde'));
// console.log(duplicateCount('Indivisibility'));

const foo = (text) => {
    {
        let countsArr = text.toLowerCase().split('').sort().join('').match((/([^])\1+/gi))
        return (countsArr) ? countsArr.length : 0


    }
}
console.log(foo('aabbcde'))
console.log(foo(''))
console.log(foo('aabBcde'))
console.log(foo('Indivisibility'))
