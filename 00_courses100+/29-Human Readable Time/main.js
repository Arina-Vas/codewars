// Description:
//     Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    const HH = Math.floor(seconds / 3600).toString().padStart(2,'0')
    const MM = Math.floor((seconds%3600)/60).toString().padStart(2,'0')
    const SS = Math.floor(seconds%60).toString().padStart(2,'0')
    return `${HH}:${MM}:${SS}`
}

console.log(humanReadable(60));
console.log(humanReadable(86399));