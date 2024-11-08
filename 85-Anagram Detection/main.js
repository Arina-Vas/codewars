// Description:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// Solution

const isAnagram = function (test, original) {
    let testNew = [...test.toLowerCase()].sort().join('');
    let originalNew = [...original.toLowerCase()].sort().join('');
    return testNew === originalNew; // Проверяем, равны ли отсортированные строки
}
console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("dumble", "bumble"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("apple", "pale"));
