'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// // Selecting
// console.log(`Selecting ↓`);

// console.log(document.documentElement);
// const allSelections = document.querySelector('.section');

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');

// console.log('----------');

// // Creating and Inserting
// console.log(`Creating and Inserting ↓`);

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// header.append(message);

// document.querySelector('.btn--close-cookie').addEventListener('click', e => message.remove());

// console.log('----------');

// // Styles Attrtribues Classes
// console.log(`Styles Attrtribues Classes ↓`);

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

// document.documentElement.style.setProperty('--color-primary', '#f5af71');

// // Attributes
// const logo = document.querySelector('.nav__logo');

// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt);
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// console.log('----------');
