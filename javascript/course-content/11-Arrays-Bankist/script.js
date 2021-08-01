'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDispalyBalance = movements => {
  const balance = movements.reduce((bal, mov) => (bal += mov));

  labelBalance.textContent = `${balance} EUR`;
};

calcDispalyBalance(account1.movements);

const calcDispalySummary = movements => {
  const incomes = movements.filter(mov => mov > 0).reduce((s, mov) => s + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements.filter(mov => mov < 0).reduce((s, mov) => s - mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(r => r >= 1)
    .reduce((s, r) => s + r, 0);

  labelSumInterest.textContent = `${interest}€`;
};

calcDispalySummary(account1.movements);

const createUsernames = accounts => {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

// let arr = [...'abcde'];

// // Slice
// console.log(`Slice ↓`);

// console.log(arr.slice(2));
// console.log(arr);

// console.log('----------');

// // Splice
// console.log(`Splice ↓`);

// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

// console.log('----------');

// // Reverse
// console.log(`Reverse ↓`);

// const arr2 = [...'jihgf'];
// console.log(arr2.reverse());
// console.log(arr2);

// console.log('----------');

// // Concat
// console.log(`Concat ↓`);

// arr = [...'abcde'];
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// console.log('----------');

// // Join
// console.log(`Join ↓`);

// console.log(letters.join(' 👏 '));

// console.log('----------');

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach((move, i) => {
//

// currencies.forEach((val, key, map) => {
//   console.log(`${key}: ${val}`);
//   console.log(map);
// });

// const eurToUsd = 1.19;

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const moveDescription = movements.map((move, i) => {
//   const str = `Movement ${i + 1}: you`;
//   return move > 0 ? `${str} deposited ${move}` : `${str} withdrew ${Math.abs(move)}`;
// });

// console.log(moveDescription);

// Filter
// console.log(`Filter ↓`);

// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(deposits);
// console.log(withdrawals);

// console.log('----------');

// Reduce
// console.log(`Reduce ↓`);

// let iBal = 60;
// const balance = movements.reduce((sum, val) => (sum += val), iBal);

// console.log(balance);

// const max = movements.reduce((max, mov) => (mov > max ? (max = mov) : max));

// console.log(max);

// console.log('----------');

// Chainiing
// console.log(`Chainiing ↓`);

// const rate = 1.19;
// const usd = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * rate)
//   .reduce((bal, mov) => bal + mov, 0);

// console.log(usd);

// console.log('----------');
