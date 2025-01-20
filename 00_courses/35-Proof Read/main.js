// Description:
//     You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters.
//
// Write a function which will:
//
//     Remove the spelling errors in 'ei' words. (Examples of 'ei' words: their, caffeine, deceive, weight)
//
// Only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case. Each sentence is separated by a full stop.
//
//     Example:
//
// He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.
//
//     Solution

function proofread(str) {

    // const arr = str.toLowerCase().split('')
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === 'e' && (arr[i + 1] === 'i')) {
    //         arr[i + 1] = 'e'
    //         arr[i] = 'i'
    //
    //     }
    //     if (arr[i] === 'e' && arr[i - 1] === 'i') {
    //         arr[i - 1] = 'e'
    //         arr[i] = 'i'
    //
    //     }
    // }
    // arr.forEach((el,i) => {
    //     if(arr.indexOf(el) === 0){
    //         arr[i] = el.toUpperCase()
    //     }
    //     else if ((el === '.' || el === '!' || el === '?') && i + 1 < arr.length) {
    //         if( arr[i+1] === ' '){
    //             arr[i+2] = arr[i+2].toUpperCase()
    //         }
    //         arr[i+1] = arr[i+1].toUpperCase()
    //     }
    // })
    // return arr.join('')

    return str.toLowerCase().
    replace(/ie/g, 'ei').
    replace(/^.|(?<=[?!.]\s)./g, s => s.toUpperCase())
    ;


}


console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."));