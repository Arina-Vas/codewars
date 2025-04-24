// Description:
//     You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
//
//     Your task is to return the number of JavaScript developers coming from Europe.
//
//     For example, given the following list:
//
//     var list1 = [
//         { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//         { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//         { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//         { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30-RGB To Hex Conversion, language: 'CSS' }
//     ];
// your function should return number 1.
//
// If, there are no JavaScript developers from Europe then your function should return 0.
//
// Notes:
//
//     The format of the strings will always be Europe and JavaScript.
//     All data will always be valid and uniform as in the example above.
//
//
//
//
//     This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

function countDevelopers(list) {
    return list.filter((h) => h.continent === 'Europe' && h.language === 'JavaScript').length
}

console.log(countDevelopers([
    {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript'},
    {firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript'},
    {firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML'},
    {firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS'}
]));
console.log(countDevelopers([{"firstName":"Nor","lastName":"E.","country":"Malaysia","continent":"Asia","age":21,"language":"Clojure"},{"firstName":"Mohamed","lastName":"F.","country":"Morocco","continent":"Africa","age":40,"language":"Ruby"},{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":19,"language":"C"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Seoyeon","lastName":"J.","country":"South Korea","continent":"Asia","age":29,"language":"Ruby"},{"firstName":"Emily","lastName":"A.","country":"Northern Ireland","continent":"Europe","age":32,"language":"JavaScript"},{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"}]))