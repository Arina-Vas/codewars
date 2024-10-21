// Description:
// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

// Solution:

// const whosOnline = (friends) => {
//     const online = [];
//     const offline = [];
//     const away = [];

//     friends.map((x) => x.status === 'online' && x.lastActivity < 11 ? online.push(x.username) : x.status === 'offline' ? offline.push(x.username) : x.status === 'online' && x.lastActivity > 10 ? away.push(x.username) : [])
// // x - временная переменная для мап, мап заменяет перебор элеметов массива, т.е. применяется сразу ко всему массиву, после стрелки пишем, что нужно сделать, в данном случае провести проверку(if, else) с помощью тернарного оператора и добавить соответсвующие значения в массив; если мы ничего не добавили, то массив д.б. пустым, поэтому [] в конце. Можжно использовать обычную конструкцию иф элсе
//     // for (let key in friends) {
//     //     if (friends.status === "online") {
//     //         for (let act in friends) {
//     //             if (friends.lastActivity < 11) {
//     //                 online.push(friends[key]);
//     //             } else away.push(friends[key])
//     //         }
//     //     } else if (friends[key] === "offline") {
//     //         offline.push(friends[key])
//     //     }
//     // }
//     if (online.length > 0 && offline.length > 0 && away.length > 0) {
//         return { online, offline, away }
//     }
//     if (online.length > 0 && away.length > 0) {
//         return { online, away }
//     }
//     if (online.length > 0 && offline.length > 0) {
//         return { online, offline }
//     }
//     if (offline.length > 0 && away.length > 0) {
//         return { offline, away }
//     }
//     return {}
// }


const whosOnline = (friends) => {
    const result = {};
    if (!friends.length) {
        return result;
    }
    else {
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].status === "offline") {
                result.offline = [];
                result.offline.push
            }
        }
    }
}