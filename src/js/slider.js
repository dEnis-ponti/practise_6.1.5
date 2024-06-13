import Swiper from 'swiper/swiper-bundle'

let initSliders = function () {
  let initBrandsSlider = function () {
    function setSliderItems() {
      let brandsSlider = document.querySelector('.brands__slider')
      let brandsList = document.querySelector('.brands__list')
      let brandsItems = brandsList.children
      let showMoreBtn = brandsSlider.querySelector('.show-more-btn')
      let showMoreBtnText = showMoreBtn.textContent
      let windowWidth = window.innerWidth

      if (windowWidth < 768) {
        showMoreBtn.style.display = 'none'

        for (let j = 11; j >= 6; j--) {
          if (j < 9) {
            brandsItems[j].classList.remove('brands__item--hide')
          } else {
            brandsItems[j].classList.add('brands__item--hide')
          }
        }
      } else if (windowWidth >= 768 && windowWidth < 969) {
        showMoreBtn.style.display = 'inline-block'
        for (let j = 11; j >= 6; j--) {
          brandsItems[j].classList.add('brands__item--hide')
        }
      } else if (windowWidth >= 969) {
        showMoreBtn.style.display = 'inline-block'
        for (let j = 11; j >= 6; j--) {
          if (j < 8) {
            brandsItems[j].classList.remove('brands__item--hide')
          } else {
            brandsItems[j].classList.add('brands__item--hide')
          }
        }
      }

      showMoreBtn.addEventListener('click', function () {
        if (!showMoreBtn.classList.contains('show-more-btn--active')) {
          showMoreBtn.textContent = 'Скрыть'
          showMoreBtn.classList.add('show-more-btn--active')
          let chidrenArrBrandsItems = Array.from(brandsItems)
          for (let i = 11; i >= 6; i--) {
            let brandsItemHide = chidrenArrBrandsItems.find((e) =>
              e.classList.contains('brands__item--hide')
            )
            if (brandsItemHide) {
              chidrenArrBrandsItems[i].classList.remove('brands__item--hide')
            }
          }
        } else {
          showMoreBtn.textContent = showMoreBtnText
          showMoreBtn.classList.remove('show-more-btn--active')
          if (windowWidth >= 768 && windowWidth < 1426) {
            showMoreBtn.style.display = 'inline-block'
            for (let j = 11; j >= 6; j--) {
              brandsItems[j].classList.add('brands__item--hide')
            }
          } else if (windowWidth >= 1426) {
            showMoreBtn.style.display = 'inline-block'
            for (let j = 11; j >= 8; j--) {
              brandsItems[j].classList.add('brands__item--hide')
            }
          }
        }
      })
    }
    setSliderItems()
    window.addEventListener('resize', setSliderItems)

    let windowWidth = window.innerWidth
    let brandsSwiper = null
    let mediaBreakpoint = 768

    let initBrandsSwiper = function () {
      if (brandsSwiper === null) {
        brandsSwiper = new Swiper('.brandsSwiper', {
          // centeredSlides: true,
          centerInsufficientSlides: true,
          // Optional parameters
          direction: 'horizontal',
          loop: false,
          createElements: true,
          breakpoints: {
            0: {
              spaceBetween: 16,
              slidesPerView: 1.35
            },
            321: {
              spaceBetween: 16,
              slidesPerView: 1.5
            },
            768: {
              spaceBetween: 0,
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
      brandsSwiper.destroy()
      brandsSwiper = null
    }

    let brandsSwiperPagination = document.querySelector(
      '.brandsSwiper-pagination'
    )
    if (windowWidth < mediaBreakpoint) {
      brandsSwiperPagination.style.display = 'flex'
      initBrandsSwiper()
    }

    window.addEventListener('resize', function () {
      let windowWidth = window.innerWidth
      let brandsSwiperPagination = document.querySelector(
        '.brandsSwiper-pagination'
      )
      if (windowWidth < mediaBreakpoint) {
        brandsSwiperPagination.style.display = 'flex'
        initBrandsSwiper()
      } else if (brandsSwiper !== null) {
        brandsSwiperPagination.style.display = 'none'
        destroyBrandsSwiper()
      }
    })
  }

  let initServicesSlider = function () {
    function setSliderItems() {
      let servicesSlider = document.querySelector('.services__slider')
      let servicesList = document.querySelector('.services__list')
      let servicesItems = servicesList.children
      let showMoreBtn = servicesSlider.querySelector('.show-more-btn')
      let showMoreBtnText = showMoreBtn.textContent
      let windowWidth = window.innerWidth

      if (windowWidth < 768) {
        showMoreBtn.style.display = 'none'

        for (let j = 8; j >= 4; j--) {
          servicesItems[j].classList.remove('services__item--hide')
        }
      } else if (windowWidth >= 768 && windowWidth < 969) {
        showMoreBtn.style.display = 'inline-block'
        for (let j = 8; j >= 3; j--) {
          servicesItems[j].classList.add('services__item--hide')
        }
      } else if (windowWidth >= 969) {
        showMoreBtn.style.display = 'inline-block'
        for (let j = 8; j >= 3; j--) {
          if (j < 4) {
            servicesItems[j].classList.remove('services__item--hide')
          } else {
            servicesItems[j].classList.add('services__item--hide')
          }
        }
      }

      showMoreBtn.addEventListener('click', function () {
        if (!showMoreBtn.classList.contains('show-more-btn--active')) {
          showMoreBtn.textContent = 'Скрыть'
          showMoreBtn.classList.add('show-more-btn--active')
          let chidrenArrServicesItems = Array.from(servicesItems)
          for (let i = 8; i >= 3; i--) {
            let servicesItemHide = chidrenArrServicesItems.find((e) =>
              e.classList.contains('services__item--hide')
            )
            if (servicesItemHide) {
              chidrenArrServicesItems[i].classList.remove(
                'services__item--hide'
              )
            }
          }
        } else {
          showMoreBtn.textContent = showMoreBtnText
          showMoreBtn.classList.remove('show-more-btn--active')
          if (windowWidth >= 768 && windowWidth < 1426) {
            showMoreBtn.style.display = 'inline-block'
            for (let j = 8; j >= 3; j--) {
              servicesItems[j].classList.add('services__item--hide')
            }
          } else if (windowWidth >= 1426) {
            showMoreBtn.style.display = 'inline-block'
            for (let j = 8; j >= 4; j--) {
              servicesItems[j].classList.add('services__item--hide')
            }
          }
        }
      })
    }
    setSliderItems()
    window.addEventListener('resize', setSliderItems)

    let windowWidth = window.innerWidth
    let servicesSwiper = null
    let mediaBreakpoint = 768

    let initServicesSwiper = function () {
      if (servicesSwiper === null) {
        servicesSwiper = new Swiper('.servicesSwiper', {
          slidesPerView: 1.25,
          spaceBetween: 16,
          centerInsufficientSlides: true,
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

    function destroyServicesSwiper() {
      servicesSwiper.destroy()
      servicesSwiper = null
    }

    let servicesSwiperPagination = document.querySelector(
      '.servicesSwiper-pagination'
    )
    if (windowWidth < mediaBreakpoint) {
      servicesSwiperPagination.style.display = 'flex'
      initServicesSwiper()
    }

    window.addEventListener('resize', function () {
      let windowWidth = window.innerWidth
      let servicesSwiperPagination = document.querySelector(
        '.servicesSwiper-pagination'
      )
      if (windowWidth < mediaBreakpoint) {
        servicesSwiperPagination.style.display = 'flex'
        initServicesSwiper()
      } else if (servicesSwiper !== null) {
        servicesSwiperPagination.style.display = 'none'
        destroyServicesSwiper()
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

  return initBrandsSlider(), initServicesSlider(), initPricecSliders()
}

export default initSliders
