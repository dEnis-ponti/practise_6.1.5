import Swiper from 'swiper/swiper-bundle'

let initSliders = function () {
  let initBrandsSliders = function () {
    let brandsSlider = document.querySelector('.brands__slider')
    let brandsList = document.querySelector('.brands__list')
    let brandsItems = brandsList.children

    let showMoreBtn = brandsSlider.querySelector('.show-more-btn')
    let showMoreBtnText = showMoreBtn.textContent

    let brandSwiper = null
    let mediaBreakpoint = 768

    let initBrandsSwiper = function () {
      if (brandSwiper === null) {
        brandSwiper = new Swiper('.brandsSwiper', {
          // centeredSlides: true,
          centerInsufficientSlides: true,
          // Optional parameters
          direction: 'horizontal',
          loop: false,
          createElements: true,
          breakpoints: {
            0: {
              spaceBetween: 16,
              slidesPerView: 1.5
            },
            321: {
              spaceBetween: 16,
              slidesPerView: 1.5
            },
            768: {
              spaceBetween: 16,
              slidesPerView: 1.5
            }
          },

          // If we need pagination
          pagination: {
            el: '.brandsSwiper-pagination',
            clickable: true
          },
          slideToClickedSlide: true,
          draggable: true
        })
      }
    }
    function destroyBrandsSwiper() {
      brandSwiper.destroy()
      brandSwiper = null
    }

    let windowWidth = window.innerWidth
    let brandSwiperPagination = document.querySelector(
      '.brandsSwiper-pagination'
    )
    if (windowWidth <= mediaBreakpoint) {
      brandSwiperPagination.style.display = 'flex'
      initBrandsSwiper()
    }

    window.addEventListener('resize', function () {
      let windowWidth = window.innerWidth
      let brandSwiperPagination = document.querySelector(
        '.brandsSwiper-pagination'
      )
      if (windowWidth <= mediaBreakpoint) {
        brandSwiperPagination.style.display = 'flex'
        initBrandsSwiper()
      } else if (brandSwiper !== null) {
        brandSwiperPagination.style.display = 'none'
        destroyBrandsSwiper()
      }
    })

    showMoreBtn.addEventListener('click', function () {
      if (!showMoreBtn.classList.contains('show-more-btn--active')) {
        showMoreBtn.textContent = 'Скрыть'
        showMoreBtn.classList.add('show-more-btn--active')
        let numOfElems = brandsItems.length + 2
        setSliderItems(numOfElems)
      } else {
        showMoreBtn.textContent = showMoreBtnText
        showMoreBtn.classList.remove('show-more-btn--active')
        let itemsToDisplay = brandsItems.length - 3
        for (let j = brandsItems.length; (j = itemsToDisplay); j--) {
          if (brandsItems[j] != undefined) {
            brandsItems[j].remove()
          } else {
            break
          }
        }
      }
    })
  }

  let initServicesSliders = function () {
    let servicesSlider = document.querySelector('.services__slider')
    let servicesSliderMobile = document.querySelector(
      '.services__slider-mobile'
    )
    let servicesList = document.querySelector('.services__list')
    let servicesListMobile =
      servicesSliderMobile.querySelector('.services__list')

    let servicesItems = servicesList.children
    let servicesItemsMobile = servicesListMobile.children
    let serviceItemTemplateMobile = document
      .querySelector('#swiper-template-services')
      .content.querySelector('.services__item')
    let serviceItemTemplate =
      document.querySelector('#service-template').content
    let serviceItem = serviceItemTemplate.querySelector('.services__item')
    let showMoreBtn = servicesSlider.querySelector('.show-more-btn')
    let showMoreBtnText = showMoreBtn.textContent

    let initializeSwiper = function () {
      let screenWidth = window.innerWidth
      if (screenWidth < 768) {
        const swiper = new Swiper('.servicesSwiper', {
          slidesPerView: 1.25,
          spaceBetween: 16,
          centerInsufficientSlides: false,
          // Optional parameters
          direction: 'horizontal',
          loop: false,

          // If we need pagination
          pagination: {
            el: '.servicesSwiper-pagination',
            clickable: true
          },
          slideToClickedSlide: true,
          draggable: true
        })
      }
    }
    initializeSwiper()

    showMoreBtn.addEventListener('click', function () {
      if (!showMoreBtn.classList.contains('show-more-btn--active')) {
        showMoreBtn.textContent = 'Скрыть'
        showMoreBtn.classList.add('show-more-btn--active')
        let numOfElems = servicesItems.length + 3
        setSliderItems(numOfElems)
      } else {
        showMoreBtn.textContent = showMoreBtnText
        showMoreBtn.classList.remove('show-more-btn--active')
        let itemsToDisplay = servicesItems.length - 4
        for (let j = servicesItems.length; (j = itemsToDisplay); j--) {
          if (servicesItems[j] != undefined) {
            servicesItems[j].remove()
          } else {
            break
          }
        }
      }
    })
  }

  let initPricecSliders = function () {
    let priceSwiper = null
    let mediaBreakpoint = 768
    function initPriceSwiper() {
      if (priceSwiper === null) {
        priceSwiper = new Swiper('.pricesSwiper', {
          slidesPerView: 1.1,
          spaceBetween: 16,
          centerInsufficientSlides: false,
          // Optional parameters
          direction: 'horizontal',
          loop: true,

          // If we need pagination
          pagination: {
            el: '.pricesSwiper-pagination',
            clickable: true
          },
          slideToClickedSlide: true,
          draggable: true
        })
      }
    }
    function destroyPriceSwiper() {
      priceSwiper.destroy()
      priceSwiper = null
    }

    let windowWidth = window.innerWidth
    let priceSwiperPagination = document.querySelector(
      '.pricesSwiper-pagination'
    )
    if (windowWidth <= mediaBreakpoint) {
      priceSwiperPagination.style.display = 'flex'
      initPriceSwiper()
    }

    window.addEventListener('resize', function () {
      let windowWidth = window.innerWidth
      let priceSwiperPagination = document.querySelector(
        '.pricesSwiper-pagination'
      )
      if (windowWidth <= mediaBreakpoint) {
        priceSwiperPagination.style.display = 'flex'
        initPriceSwiper()
      } else if (priceSwiper !== null) {
        priceSwiperPagination.style.display = 'none'
        destroyPriceSwiper()
      }
    })
  }

  return initBrandsSliders(), initServicesSliders(), initPricecSliders()
}

export default initSliders
