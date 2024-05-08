import 'normalize.css'
import '../scss/style.scss'
import initSliders from './slider.js'

console.log('Works!')

window.addEventListener('DOMContentLoaded', function () {
  initSliders()

  // let burgerBtn = document.querySelector('#burger-btn')
  // let burgerMenu = document.querySelector('.burger-menu')

  // burgerBtn.addEventListener('click', function () {
  //   burgerMenu.classList.toggle('burger-menu--hide')
  //   burgerBtn.classList.add('burger-button--hide')
  // });

  // function adjustAside() {
  //   let pageContentHeight =
  //     document.querySelector('.page__content').clientHeight
  //   let asideHeight = document.querySelector('.burger-menu').clientHeight
  //   let burgerMenuFooter = document.querySelector('.burger-menu__footer')
  //   let adjustValue = `${pageContentHeight - asideHeight}` + 'px'

  //   console.dir(burgerMenuFooter)
  //   burgerMenuFooter.style.height = adjustValue
  //   console.log(window)
  // }
  // adjustAside()
})
