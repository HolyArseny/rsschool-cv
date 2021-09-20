const nav = document.querySelector('#nav');
const burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
  nav.classList.toggle('cv__navigation--open');
});