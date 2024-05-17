import 'normalize.css'
import '../scss/style.scss'
import 'swiper/swiper-bundle.css'

import initSliders from './slider.js'
import initModals from './modal.js'
import initBurger from './burger.js'
import initReadMoreBtn from './read-more.js'

console.log('Works!')

window.addEventListener('DOMContentLoaded', function () {
  initBurger()
  initSliders()
  initModals()
  initReadMoreBtn()
})
