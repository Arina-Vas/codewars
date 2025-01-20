// Description:
//     You managed to send your friend to queue for tickets in your stead, but there is a catch: he will get there only if you tell him how much that is going to take. And everybody can only take one ticket at a time, then they go back in the last position of the queue if they need more (or go home if they are fine).
//
// Each ticket takes one minutes to emit, the queue is well disciplined, Brit-style, and so it moves smoothly, with no waste of time.
//
//     You will be given an array/list/vector with all the people queuing and the initial position of your buddy, so for example, knowing that your friend is in the third position (that we will consider equal to the index, 2 (3 in COBOL): he is the guy that wants 3 tickets!) and the initial queue is [2, 5, 3, 4, 6].
//
//     The first dude gets his ticket and the queue goes now like this [5, 3, 4, 6, 1], then [3, 4, 6, 1, 4] and so on. In the end, our buddy will be queuing for 12 minutes, true story!
//
//     Build a function to compute it, resting assured that only positive integers are going to be there and you will be always given a valid index; but we also want to go to pretty popular events, so be ready for big queues with people getting plenty of tickets.
//
//     Solution

function queue(queues, pos) {
    // let mins = 0
    //     while (queues[pos] > 0) {
    //         for (let i = 0; i < queues.length; i++) {
    //             if (queues[i] > 0) {
    //                 queues[i] --
    //                 mins++
    //                 if (i === pos && queues[i] === 0) {
    //                     return mins
    //                 }
    //             }
    //         }
    //
    //     }
    //     return mins
    return queues.reduce((acc,val,i) => acc + Math.min(val, queues[pos] - Number(i > pos)),0);
}


console.log(queue([2, 5, 3, 6, 4], 0))
console.log(queue([2, 5, 3, 6, 4], 1))
console.log(queue([2, 5, 3, 6, 4], 2))
console.log(queue([2, 5, 3, 6, 4], 3))
console.log(queue([2, 5, 3, 6, 4], 4))


// ❗❗❗❗ Math.min(val, queues[pos] - Number(i > pos)):// Эта часть определяет, сколько минут потребуется каждому человеку на покупку билетов.
//
//     val — количество билетов, которые хочет текущий человек.
//
//     queues[pos] — количество билетов, которые хочет наш друг.
//
// Number(i > pos):
//
// Если индекс текущего человека i находится после нашего друга (т.е., i > pos), то эта часть возвращает 1.
// Если индекс находится до или на месте друга, то возвращает 0.
// queues[pos] - Number(i > pos):
//
// Если человек находится после нашего друга в очереди, то ему разрешено получить только на 1 билет меньше (поскольку друг уходит раньше, если он покупает последний билет).
// Если человек находится перед другом, он может получить столько же билетов, сколько у него запрошено.
// Math.min(val, ...):
//
// Берем минимальное из:
//     val — количество билетов у текущего человека.
//     queues[pos] - Number(i > pos) — ограничение на количество билетов в зависимости от позиции человека относительно друга.