let initModals = function () {
  let page = document.querySelector('.page')
  let feedbackTriggerButton = document.querySelector('#feedback')
  let feedbackModal = document.querySelector('#modal-feedback')

  let callTriggerButton = document.querySelector('#callback')
  let callModal = document.querySelector('#modal-callback')

  let modalInstructions = function (triggerBtn, modalBlock) {
    let modalCloseBtn = modalBlock.querySelector('.modal__close-btn')
    triggerBtn.addEventListener('click', function (e) {
      e.preventDefault()
      modalBlock.classList.remove('modal--hide')
      page.classList.add('page--modal-on')
    })
    modalCloseBtn.addEventListener('click', function () {
      modalBlock.classList.add('modal--hide')
      page.classList.remove('page--modal-on')
    })
    modalBlock.addEventListener('click', function (e) {
      console.dir(e.target)
      if (e.target === modalBlock) {
        modalBlock.classList.add('modal--hide')
        page.classList.remove('page--modal-on')
      }
    })
  }

  modalInstructions(feedbackTriggerButton, feedbackModal)
  modalInstructions(callTriggerButton, callModal)
}

export default initModals
