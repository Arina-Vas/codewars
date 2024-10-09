// Description:
// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

// Solution:
const objA = { a: 10, b: 20, c: 30, e: 5 };
// !!2 - не прошло
// function addProperty(obj, prop, value) {
//     for (let key in obj) {
//         if (prop === key) {
//             // throw new Error('Error message')
//         }
//         else {
//             obj[prop] = value;
//         }
//     }
//     return obj;
// }

// !!2 - не прошло
// function addProperty(obj, prop, value) {
//     for (let key in obj) {
//         if (prop !== key || obj[prop] !== obj[key]) {
//             obj[prop] = value;
//             // return obj;
//         }
//         else {
//             return prop;
//             // throw new Error('Error message')
//         }
//     }
// }

// console.log(addProperty(objA, "e", 5));
// console.log(objA);

// !!2 - не прошло
// function addProperty(obj, prop, value) {
//     for (let key in obj) {
//         if ((prop === key) && (value === obj[key])) {
//             console.log("error");
//         }

//         else if (prop !== key) {
//             obj[prop] = value;
//         }
//     }
// }

// addProperty(objA, "e", 5);
// console.log(objA);

// прошло
function addProperty(obj, prop, value) {
    if (Object.hasOwn(obj, prop)) {
        throw new Error('Error message');
    }
    else {
        obj[prop] = value;
    }
    return obj;
}