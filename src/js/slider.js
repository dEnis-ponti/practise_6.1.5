import Swiper from 'swiper/swiper-bundle'

let initSliders = function () {
  let initBrandsSliders = function () {
    let brandsSlider = document.querySelector('.brands__slider')
    let brandsSliderMobile = document.querySelector('.brands__slider-mobile')
    let brandsList = document.querySelector('.brands__list')
    let brandsListMobile = brandsSliderMobile.querySelector('.brands__list')

    let brandsItems = brandsList.children
    let brandsItemsMobile = brandsListMobile.children
    let brandItemTemplateMobile = document
      .querySelector('#swiper-template-brands')
      .content.querySelector('.brands__item')
    let brandItemTemplate = document.querySelector('#brand-template').content
    let brandItem = brandItemTemplate.querySelector('.brands__item')
    let showMoreBtn = brandsSlider.querySelector('.show-more-btn')
    let showMoreBtnText = showMoreBtn.textContent

    let setSliderItems = function (numOfElems) {
      let screenWidth = window.innerWidth
      if (screenWidth >= 768) {
        for (let i = brandsItems.length; i <= numOfElems; i++) {
          let brandItemDuplicate = brandItem.cloneNode(true)
          brandsList.appendChild(brandItemDuplicate)
          let brandLogo = brandsItems[i].querySelector('.brands__logo')
          let brandLogoSrc = brandLogo.src
          let validBrandLogoSrc = brandLogoSrc.replace(
            'brand-1.png',
            'brand-' + (i + 1) + '.png'
          )
          brandLogo.src = validBrandLogoSrc
        }
      } else if (screenWidth < 768) {
        for (let i = brandsItemsMobile.length; i <= numOfElems; i++) {
          let brandItemDuplicate = brandItemTemplateMobile.cloneNode(true)
          brandsListMobile.appendChild(brandItemDuplicate)
          let brandLogo = brandsItemsMobile[i].querySelector('.brands__logo')
          let brandLogoSrc = brandLogo.src
          let validBrandLogoSrc = brandLogoSrc.replace(
            'brand-1.png',
            'brand-' + (i + 1) + '.png'
          )
          brandLogo.src = validBrandLogoSrc
        }
      }
    }

    let adjustSliderItems = function () {
      let screenWidth = window.innerWidth
      if (screenWidth >= 1120) {
        setSliderItems(7)
      } else if (screenWidth >= 768) {
        setSliderItems(5)
      } else if (screenWidth < 768) {
        setSliderItems(8)
      }
    }
    adjustSliderItems()
    window.addEventListener('resize', adjustSliderItems)

    let initializeSwiper = function () {
      let screenWidth = window.innerWidth
      if (screenWidth < 768) {
        console.log('swiper is initialized')
        const swiper = new Swiper('.brandsSwiper', {
          slidesPerView: 1.25,
          spaceBetween: 16,
          centerInsufficientSlides: true,
          // Optional parameters
          direction: 'horizontal',
          loop: false,

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
    initializeSwiper()
    let validateSlider = function () {
      let screenWidth = window.innerWidth
      if (screenWidth < 768) {
        brandsSlider.classList.add('brands__slider--hide')
        brandsSlider.classList.remove('brands__slider--show')
        brandsSliderMobile.classList.remove('brands__slider-mobile--hide')
        brandsSliderMobile.classList.add('brands__slider-mobile--show')
      } else if (screenWidth >= 768) {
        brandsSlider.classList.add('brands__slider--show')
        brandsSlider.classList.remove('brands__slider--hide')
        brandsSliderMobile.classList.add('brands__slider-mobile--hide')
        brandsSliderMobile.classList.remove('brands__slider-mobile--show')
      }
    }
    validateSlider()
    window.addEventListener('resize', validateSlider)

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
        console.log(itemsToDisplay)
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

    let setSliderItems = function (numOfElems) {
      let screenWidth = window.innerWidth
      if (screenWidth >= 768) {
        for (let i = servicesItems.length; i <= numOfElems; i++) {
          let serviceItemDuplicate = serviceItem.cloneNode(true)
          servicesList.appendChild(serviceItemDuplicate)
          let serviceLink = servicesItems[i].querySelector('.services__link')
          let validServiceText = serviceLink.textContent.replace(
            'Ремонт устройства #1',
            'Ремонт устройства # ' + (i + 1)
          )
          serviceLink.textContent = validServiceText
        }
      } else if (screenWidth < 768) {
        for (let i = servicesItemsMobile.length; i <= numOfElems; i++) {
          let serviceItemDuplicate = serviceItemTemplateMobile.cloneNode(true)
          servicesListMobile.appendChild(serviceItemDuplicate)
          let serviceLink =
            servicesItemsMobile[i].querySelector('.services__link')
          let validServiceText = serviceLink.textContent.replace(
            'Ремонт устройства #1',
            'Ремонт устройства # ' + (i + 1)
          )
          serviceLink.textContent = validServiceText
        }
      }
    }

    let adjustSliderItems = function () {
      let screenWidth = window.innerWidth
      if (screenWidth >= 1120) {
        setSliderItems(3)
      } else if (screenWidth >= 768) {
        setSliderItems(2)
      } else if (screenWidth < 768) {
        setSliderItems(8)
      }
    }
    adjustSliderItems()
    window.addEventListener('resize', adjustSliderItems)

    let initializeSwiper = function () {
      let screenWidth = window.innerWidth
      if (screenWidth < 768) {
        console.log('swiper is initialized')
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
    let validateSlider = function () {
      let screenWidth = window.innerWidth
      if (screenWidth < 768) {
        servicesSlider.classList.add('services__slider--hide')
        servicesSlider.classList.remove('services__slider--show')
        servicesSliderMobile.classList.remove('services__slider-mobile--hide')
        servicesSliderMobile.classList.add('services__slider-mobile--show')
      } else if (screenWidth >= 768) {
        servicesSlider.classList.add('services__slider--show')
        servicesSlider.classList.remove('services__slider--hide')
        servicesSliderMobile.classList.add('services__slider-mobile--hide')
        servicesSliderMobile.classList.remove('services__slider-mobile--show')
      }
    }
    validateSlider()
    window.addEventListener('resize', validateSlider)

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
        console.log(itemsToDisplay)
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
    let initializeSwiper = function () {
      let screenWidth = window.innerWidth
      if (screenWidth < 768) {
        console.log('swiper is initialized')
        const swiper = new Swiper('.pricesSwiper', {
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
    initializeSwiper()
  }
  return initBrandsSliders(), initServicesSliders(), initPricecSliders()
  // ,
}

export default initSliders
