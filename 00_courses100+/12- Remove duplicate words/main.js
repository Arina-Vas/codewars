// Description:
//     Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
//     Example:
//
// Input:
//
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
//     'alpha beta gamma delta'

function removeDuplicateWords (s) {
    return s.split(' ').reduce((acc,w) => {
        if (!acc.includes(w)) acc.push(w);
        return acc;
    },[]).join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
