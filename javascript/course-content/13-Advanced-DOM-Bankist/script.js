'use strict';

///////////////////////////////////////
// Modal window

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

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

///////////////////////////////////////
// Navigation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

    // TESTING
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  }
});

///////////////////////////////////////
// Tabs

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // Remove active
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// ╔╦╗┌─┐┌─┐┌┬┐┬┌┐┌┌─┐
//  ║ ├┤ └─┐ │ │││││ ┬
//  ╩ └─┘└─┘ ┴ ┴┘└┘└─┘

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

// const fn = () => {
//   console.log('ehllo');
//   h1.removeEventListener('mouseenter', fn);
// };

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', fn);

// DOM testing
// console.log(`DOM testing ↓`);

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // h1.closest('.header').style.background = 'var(--gradient-primary)';

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// [...h1.parentElement.children].forEach(el => {
//   if (el != h1) el.style.transform = 'scale(0.5)';
// });

// console.log('----------');
