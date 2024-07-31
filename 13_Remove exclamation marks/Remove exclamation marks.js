// Description:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Solution:
function removeExclamationMarks(s) {
    const exc = /!/g;
    return s.replace(exc, '');
}
console.log(removeExclamationMarks("Hello World!!!"));
console.log(removeExclamationMarks("Hi! Hello!"));