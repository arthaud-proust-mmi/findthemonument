const popupIntro = document.getElementById('popupIntro');
const popupCloseBtns = document.querySelectorAll('.btn__close-popup')

window.addEventListener('DOMContentLoaded', function() {
  
    if(!isEnigmaOngoing()) {
        openPopupIntro()
    }

    popupIntro.querySelector('.popup__backdrop').addEventListener('click', closePopupIntro);
    popupIntro.querySelector('.popup__btn-close').addEventListener('click', closePopupIntro);
    
})


function openPopupIntro() {
    popupIntro.classList.add('popup-open')
}
function closePopupIntro() {
    popupIntro.classList.remove('popup-open')

    startFirstEnigmaIfNoneOngoing();
}