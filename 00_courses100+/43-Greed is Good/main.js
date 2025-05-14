// Description:
//     Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
//
//     Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
//
//     Example scoring
//
// Throw       Score
// ---------   ------------------
//     5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
// 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
// 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// Note: your solution must not modify the input array.

function score(dice) {
    const points = {
        '3*1': 1000,
        '3*2': 200,
        '3*3': 300,
        '3*4': 400,
        '3*5': 500,
        '3*6': 600,
        '1*5': 50,
        '1*1': 100,
    }
    const res = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    }
    dice.forEach(r => {
        switch (r) {
            case 1:
                res[1] += 1
                break
            case 2:
                res[2] += 1
                break
            case 3:
                res[3] += 1
                break
            case 4:
                res[4] += 1
                break
            case 5:
                res[5] += 1
                break
            case 6:
                res[6] += 1
                break
        }

    })
    let sum = 0
    for (let key in res) {
        if (res[key] >= 3) {
            sum += points[`3*${key}`] || 0;
            res[key] -= 3;
        }
    }
    sum += res[1] * (points['1*1'] || 0);
    sum += res[5] * (points['1*5'] || 0)
    return sum
}

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

console.log(score([5, 1, 3, 4, 1]))
console.log(score([1, 1, 1, 3, 1]))