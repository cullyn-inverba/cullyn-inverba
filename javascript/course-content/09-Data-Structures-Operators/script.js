'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(startI, mainI) {
    return [this.starterMenu[startI], this.mainMenu[mainI]];
  },

  orderDelivery({ startI = 0, mainI = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[startI]} with ${this.mainMenu[mainI]} will be delivered to ${address} at ${time}`
    );
  },
};

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const [i, e] of menu.entries()) {
//   console.log(`${i + 1}: ${e}`);
// }

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainI: 2,
//   startI: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
// });

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// [second, first] = [first, second];

// console.log(first, second);

// let [starter, main] = restaurant.order(2, 0);
// console.log(starter, "-", main);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [2, 2];
// console.log(p, q, r);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 3, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: fo, close: co },
// } = hours;
// console.log(fo, co);

// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // Coding Challenge 1
// console.log(`Coding Challenge 1 ↓`);
// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = (...names) => {
//   const arr = [...names];
//   for (let i = 0; i < arr.length; i++) {
//     const e = arr[i];
//     console.log(e, '- Goal number:', i + 1);
//   }
// };
// printGoals(...game.scored);
// console.log('---');
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// // 7.
// console.log((team1 < team2 && game.team1) || (team1 > team2 && game.team2));

// console.log('----------');
