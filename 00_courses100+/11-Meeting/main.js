// Description:
//     John has invited some friends. His list is:
//
//     s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that
//
// makes this string uppercase
// gives it sorted in alphabetical order by last name.
//     When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
//
//     So the result of function meeting(s) will be:
//
//     "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.
//
//     Notes
// You can see another examples in the "Sample tests".

function meeting(s) {
    return  s.toUpperCase().split(';').map(name => {
        return '(' + name.slice(name.indexOf(':') + 1) + ', ' + name.slice(0, name.lastIndexOf(':')) + ')';

    }).sort().join('')
}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))

//(a, b) => {
//         if (a.slice(0,a.indexOf(',')) > b.slice(0,b.indexOf(','))) {
//             return 1;
//         }
//         if (a.slice(0,a.indexOf(',')) < b.slice(0,b.indexOf(','))) {
//             return -1;
//         }
//         if (a.slice(0,a.indexOf(',')) === b.slice(0,b.indexOf(','))) {
//             if (a.slice(a.indexOf(',')) > b.slice(b.indexOf(','))) {
//                 return 1;
//             }
//             if (a.slice(a.indexOf(',')) < b.slice(b.indexOf(','))) {
//                 return -1;
//             }
//         }
//         return 0;
//     }