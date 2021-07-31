'use strict';

// const getDivisorsCnt = n => {
//   let count = 0;
//   [...Array(n ** 0.5 + 1).keys()].slice(1).reduce(a => {
//     if (!(n % a) && a) count++;
//   }, 0);
//   return count;
// };

const getDivisorsCnt = n => [...Array((n / 2) ^ 0)].reduce((pre, _, idx) => (n % ++idx ? pre : ++pre), 1);

// const nbDig = (n, d) => {
//   let count = 0;
//   for (let i = 0; i < n + 1; i++) {
//     const sq = String(i * i);
//     if (new Set(sq).has(String(d))) {
//       [...sq].forEach(e => {
//         if (e == d) count++;
//       });
//     }
//   }
//   return count;
// };

const nbDig = (n, d) => {
  let count = 0;
  for (let i = 0; i <= n; i++) count += [...(i * i + '')].filter(e => +e === d).length;
  return count;
};

// console.log(nbDig(5750, 0));

// function declareWinner(fighter1, fighter2, firstAttacker) {
//   const attack = (attacker, defender) => {
//     defender.health -= attacker.damagePerAttack;
//   };

//   const fight = (fighter1, fighter2) => {
//     attack(fighter1, fighter2);
//     return fighter2.health <= 0 ? fighter1.name : fight(fighter2, fighter1);
//   };

//   const [first, second] = fighter1.name === firstAttacker ? [fighter1, fighter2] : [fighter2, fighter1];

//   return fight(first, second);
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
  const fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  return fac1 === fac2 ? firstAttacker : fac1 > fac2 ? fighter1.name : fighter2.name;
}

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

// console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew'));

// console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Harry'));

// console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harry'));

// function stray(numbers) {
//   for (let i = 1; i < numbers.length; i++) {
//     const e = numbers[i];
//     if (e != numbers[i - 1] && e != numbers[i + 1]) return e;
//   }
//   return numbers[0];
// }

const stray = numbers => numbers.reduce((a, b) => a ^ b);

// console.log(stray([1, 1, 2]));

// const reverseLetter = str =>
//   [...str]
//     .reverse()
//     .join('')
//     .replace(/[^a-z]/g, '');

const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');

const isAnagram = (test, original) => {
  const clean = str => [...str.toLowerCase()].sort().join('');
  return clean(test) === clean(original);
};
