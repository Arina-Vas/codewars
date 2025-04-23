// Description:
//     Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    return str.split(' ').map(w=>{
            return /[\!,\?\.\_\-]/.test(w) ?  w : w.slice(1, w.length) + w[0] + 'ay'
    }).join(' ')

}

console.log(pigIt('Hello world !'))