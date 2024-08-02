// Description: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// Solution:

function solution(str, ending){
    let end = str.endsWith(ending);
    return end;
  
}
console.log(solution('abcd', 'bcd'));
console.log(solution('abcd', 'cd'));
console.log(solution('abcd', 'ab'));