// Description:
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// Solution:
function problem(x) {
    if (typeof x === "string") {
        return "Error"

    }
    else {
        return (x * 50) + 6;
    }
}

console.log(problem("hello"));
console.log(problem(5));