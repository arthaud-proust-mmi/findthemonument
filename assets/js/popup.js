const popupIntro = document.getElementById('popupIntro');
const popupWrongMonument = document.getElementById('popupWrongMonument');
const popupNoMonument = document.getElementById('popupNoMonument');
const popupCloseBtns = document.querySelectorAll('.btn__close-popup')
popupNoMonument
window.addEventListener('DOMContentLoaded', function() {
  
    if(!isEnigmaOngoing()) {
        openPopupIntro()
    }

    popupIntro.querySelector('.popup__backdrop').addEventListener('click', closePopupIntro);
    popupIntro.querySelector('.popup__btn-close').addEventListener('click', closePopupIntro);

    popupWrongMonument.querySelector('.popup__backdrop').addEventListener('click', closePopupWrongMonument);
    popupWrongMonument.querySelector('.popup__btn-close').addEventListener('click', closePopupWrongMonument);

    popupNoMonument.querySelector('.popup__backdrop').addEventListener('click', closePopupNoMonument);
    popupNoMonument.querySelector('.popup__btn-close').addEventListener('click', closePopupNoMonument);
    
})


function openPopupIntro() {
    popupIntro.classList.add('popup-open')
}
function closePopupIntro() {
    popupIntro.classList.remove('popup-open')

    startFirstEnigmaIfNoneOngoing();
}

function openPopupWrongMonument() {
    popupWrongMonument.classList.add('popup-open')
}
function closePopupWrongMonument() {
    popupWrongMonument.classList.remove('popup-open')
}

function openPopupNoMonument() {
    popupNoMonument.classList.add('popup-open')
}
function closePopupNoMonument() {
    popupNoMonument.classList.remove('popup-open')
}