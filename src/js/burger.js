let initBurger = function () {
  let page = document.querySelector('.page')
  let pageContent = page.querySelector('.page__content')
  let burgerBtn = document.querySelector('#burger-btn')
  let burgerMenu = document.querySelector('.burger-menu')
  let burgerCloseBtn = document.querySelector('.burger-menu__close-btn')

  burgerBtn.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu--hide')
    burgerBtn.classList.add('burger-button--hide')
    page.classList.add('page--modal-on')
    pageContent.classList.add('page__content--burger-show')
  })
  burgerCloseBtn.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu--hide')
    page.classList.remove('page--modal-on')
    pageContent.classList.remove('page__content--burger-show')
  })

  // function adjustAside() {
  //   let pageContentHeight =
  //     document.querySelector('.page__content').offsetHeight
  //   let asideHeight = document.querySelector('.burger-menu').offsetHeight
  //   let burgerMenuFooter = document.querySelector('.burger-menu__footer')
  //   let adjustValue = `${pageContentHeight - asideHeight}` + 'px'
  //   burgerMenuFooter.style.height = adjustValue
  // }

  let burgerDesktopDisplay = function () {
    let windowWidth = window.innerWidth
    if (windowWidth > 1425) {
      burgerMenu.classList.toggle('burger-menu--hide')
    }
  }
  burgerDesktopDisplay()
}

export default initBurger
