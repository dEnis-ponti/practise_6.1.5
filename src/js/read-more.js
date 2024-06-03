let initReadMoreBtn = function () {
  let paragraphsWrapper = document.querySelector('.main__paragraphs-wrapper')
  let paragrapShowMoreBtn = document.querySelector('#show-more-paragraps-btn')
  let paragraphsWrapperMaxHeight = paragraphsWrapper.style.maxHeight
  let paragrapShowMoreBtnPrevText = paragrapShowMoreBtn.textContent
  let secondParagraph = paragraphsWrapper.querySelector(
    '.main__paragraph-second'
  )

  paragrapShowMoreBtn.addEventListener('click', function () {
    if (!paragrapShowMoreBtn.classList.contains('show-more-btn--active')) {
      paragrapShowMoreBtn.textContent = 'Скрыть'
      paragrapShowMoreBtn.classList.toggle('show-more-btn--active')
      paragraphsWrapper.style.maxHeight = 'min-content'
      secondParagraph.style.display = 'block'
    } else {
      paragrapShowMoreBtn.textContent = paragrapShowMoreBtnPrevText
      paragrapShowMoreBtn.classList.toggle('show-more-btn--active')
      paragraphsWrapper.style.maxHeight = paragraphsWrapperMaxHeight
      secondParagraph.style.display = 'none'
    }
  })
}

export default initReadMoreBtn
