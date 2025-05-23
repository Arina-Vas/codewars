// Description:
//     The marketing team is spending way too much time typing in hashtags.
//     Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.
//     Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    if (!str.trim() || !str) {
        return false
    }
    const words = str.split(' ').filter(el => el !== "")
    const res = '#' + words.map(w => w[0].toUpperCase() + w.slice(1)).join('')
            return res.length > 140 || !res.length ? false : res
}

// console.log(generateHashtag("Do We have A Hashtag"))
// console.log(generateHashtag(" ".repeat(200)))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))