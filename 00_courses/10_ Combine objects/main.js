// Description:
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// Solution:

// function combine(obj, obj1) {
//     const objResult = Object.assign({}, obj);
//     for (let key1 in obj1) {
//         if (key1 in objResult) {
//             objResult[key1] += obj1[key1]
//         } else {
//             objResult[key1] = obj1[key1];
//         }
//     }
//     return objResult;
// }
// console.log(combine(objA, objB));
// const objResult = Object.assign({}, objA, objB);
// console.log(objResult);

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

// function combine(...arguments) {
//     const objectsArray = Array.from(arguments);
//     const objResult = {};
//     for (let i = 0; i < objectsArray.length; i++) {
//         for (let key in objectsArray[i]) {
//             if (key in objResult) {
//                 objResult[key] += objectsArray[i][key]
//             } else {
//                 objResult[key] = objectsArray[i][key];
//             }
//         }
//     }
//     return objResult;
// }
// console.log(combine(objA, objB, objC, objD));

function combine() {
    const objResult = {};
    for (let i = 0; i < arguments.length; i++) {
        for (let key in arguments[i]) {
            if (key in objResult) {
                objResult[key] += arguments[i][key]
            } else {
                objResult[key] = arguments[i][key];
            }
        }
    }
    return objResult;
}
console.log(combine(objA, objB, objC, objD));

