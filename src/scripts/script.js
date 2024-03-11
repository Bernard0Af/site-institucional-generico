const button = document.querySelector(".header__button")
const buttonSecund = document.querySelector(".article_button")
const modal = document.querySelector(".modal__email")
const buttonClose = document.querySelector(".modal__button__close")


button.addEventListener("click", () =>{
    modal.showModal();
})

buttonSecund.addEventListener("click", () => {
    modal.showModal()
})

buttonClose.addEventListener("click", () => {
    modal.close()
})