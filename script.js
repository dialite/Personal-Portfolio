const close = document.querySelector('.close');
const nav = document.querySelector('.place');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');

close.addEventListener('click', () => {
  nav.classList.add('hide');
});

hamburger.addEventListener('click', () => {
  nav.classList.remove('hide');
});

Array.from(navLinks).forEach((navlink) => navlink.addEventListener('click', () => {
  nav.classList.add('hide');
}));
