let initReadMoreBtn = function () {
  let paragraphsWrapper = document.querySelector('.main__paragraphs-wrapper')
  let paragrapShowMoreBtn = document.querySelector('#show-more-paragraps-btn')
  let paragraphsWrapperMaxHeight = paragraphsWrapper.style.maxHeight
  let paragrapShowMoreBtnPrevText = paragrapShowMoreBtn.textContent

  paragrapShowMoreBtn.addEventListener('click', function () {
    console.log('clciked')
    if (!paragrapShowMoreBtn.classList.contains('show-more-btn--active')) {
      paragrapShowMoreBtn.textContent = 'Скрыть'
      paragrapShowMoreBtn.classList.add('show-more-btn--active')
      paragraphsWrapper.style.maxHeight = 'min-content'
    } else {
      paragrapShowMoreBtn.textContent = paragrapShowMoreBtnPrevText
      paragrapShowMoreBtn.classList.remove('show-more-btn--active')
      paragraphsWrapper.style.maxHeight = paragraphsWrapperMaxHeight
    }
  })
}

export default initReadMoreBtn
