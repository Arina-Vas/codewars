// Description:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.
//
// If you liked this kata, check out part 2!!

// Solution
function expandedForm(num) {

   return String(num).split('').reverse()
       .map((n,i) => n * Math.pow(10, i))
       .filter(n => n > 0)
       .reverse()
       .join(' + ')

   // let res = []
   // let x = 1
   // while(num > 0){
   //    if (num% 10 !== 0) res.unshift(num%10*x)
   //    num = Math.floor(num/10)
   //    x *= 10
   // }
   // return res.join(' + ')
}

// console.log(expandedForm(12))
// console.log(expandedForm(42))
console.log(expandedForm(142))
console.log( 2 * Math.pow(10, 1))