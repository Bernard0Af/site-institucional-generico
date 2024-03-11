const button = document.querySelector(".header__button")
const modal = document.querySelector(".modal__email")
const buttonClose = document.querySelector(".modal__button__close")


button.addEventListener("click", () =>{
    modal.showModal();
})

buttonClose.addEventListener("click", () => {
    modal.close()
})