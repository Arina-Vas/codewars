// Description:
//     Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
//     * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
    // const urlArr = url.split('');
    // let domainName
    // if (url.includes('www')) {
    //     domainName = urlArr.splice(urlArr.indexOf('.') + 1)
    // }
    // else if (url.includes('://')) {
    //     domainName =url.split('://')[1].split('')
    // }
    // else {
    //     domainName = urlArr
    // }
    //
    // return domainName.slice(0, domainName.indexOf('.')).join('')
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
}

console.log(domainName("https://google.com"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("http://www.google.co.jp"));
console.log(domainName("https://xbr-kco7nlwxd.it/error"));