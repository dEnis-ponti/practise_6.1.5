import 'normalize.css';
import '../scss/style.scss';
import initSliders from './slider.js';

console.log('Works!')

window.addEventListener('DOMContentLoaded', function () {
  initSliders();

  let burgerBtn = document.querySelector('#burger-btn');
  let burgerMenu = document.querySelector('.burger-menu');

  burgerBtn.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu--hide');
    burgerBtn.classList.toggle('burger-button--hide')
  })
});
