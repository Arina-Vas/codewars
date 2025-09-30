// Description:
//     We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//
// So given a string "super", we should return a list of [2, 4].
//
//     Some examples:
//     Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

const vowels = ['a','e','i','o','u','y']

function _vowelIndices(word){
    const arr = word.toLowerCase().split('')
    const res = []
    for(let i = 0; i < arr.length; i++){
        if (vowels.includes(arr[i])){
            res.push(i+1)
        }
    }
    return res
}

function __vowelIndices(word){
    return [...word.toLowerCase()].reduce((res, b,i) => {
        if(vowels.includes(b)) res.push(i+1)
        return res
    }, [])
}

function vowelIndices(word){
    return [...word.toLowerCase()].reduce((res, val,i) => /[aeiouy]/i.test(val) ? [...res,i+1]:res,[])
}

console.log(vowelIndices("orange"))
console.log(vowelIndices("Mmm"))
console.log(vowelIndices("MO<MHYH"))
console.log(vowelIndices("super"))
console.log(vowelIndices("supercalifragilisticexpialidocious"))