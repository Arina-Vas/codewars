// Description:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// Solution

function removeUrlAnchor(url) {
    let index = url.indexOf('#');
    if (index === -1) {
        return url;
    }
    return url.slice(0, index);

}
console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/'));