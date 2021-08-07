'use strict';

// Constructor functions
console.log(`Constructor functions ↓`);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const cullyn = new Person('cullyn', 1996);
console.log(cullyn);

console.log('----------');

// Prototypes
console.log(`Prototypes ↓`);

Person.prototype.calcAge = function () {
  console.log(2038 - this.birthYear);
};

cullyn.calcAge();

Person.prototype.species = 'Homo Sapiens';

console.log('----------');

// Prototypal Inheritance
console.log(`Prototypal Inheritance  ↓`);

console.log(cullyn.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [6, 3, 3, 7, 6, 8, 8, 9, 62, 839];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  [...new Set(this)];
};

const h1 = document.querySelector('h1');

console.log('----------');
