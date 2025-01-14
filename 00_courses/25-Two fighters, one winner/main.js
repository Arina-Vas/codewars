// Description:
// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

// Solution

const f1 = {
    name: "Lew",
    health: 3,
    damagePerAttack: 2
}

const f2 = {
    name: "Harry",
    health: 5,
    damagePerAttack: 4
}

function declareWinner(f1, f2, fAt) {

    let attacker = fAt === f1.name ? f1 : f2;
    let defender = fAt === f1.name ? f2 : f1;

    while (f1.health > 0 && f2.health > 0) {
        defender.health -= attacker.damagePerAttack

        if (defender.health <= 0) {
            return attacker.name;
        }


        [attacker, defender] = [defender, attacker] // меняем местами
    }
    return f1.health > 0 ? f1.name : f2.name; // если цикл завершился
}


console.log(declareWinner(f1, f2, "Lew"));
console.log(declareWinner(f1, f2, "Harry"));