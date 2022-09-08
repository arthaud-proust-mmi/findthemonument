const popupIntro = document.getElementById('popupIntro');
const popupWrongMonument = document.getElementById('popupWrongMonument');
const popupNoMonument = document.getElementById('popupNoMonument');
const popupMonumentAlreadyFound = document.getElementById('popupMonumentAlreadyFound');
const popupHint = document.getElementById('popupHint');
const popupEnd = document.getElementById('popupEnd');

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
    
    popupMonumentAlreadyFound.querySelector('.popup__backdrop').addEventListener('click', closePopupMonumentAlreadyFound);
    popupMonumentAlreadyFound.querySelector('.popup__btn-close').addEventListener('click', closePopupMonumentAlreadyFound);
    
    popupEnd.querySelector('.popup__backdrop').addEventListener('click', closePopupEnd);
    popupEnd.querySelector('.popup__btn-close').addEventListener('click', closePopupEnd);

    popupHint.querySelector('.popup__backdrop').addEventListener('click', closePopupHint);
    popupHint.querySelector('.popup__btn-close').addEventListener('click', closePopupHint);
    
})


function openPopupIntro() {
    popupIntro.classList.add('popup-open')
}
function closePopupIntro() {
    popupIntro.classList.remove('popup-open')

    startFirstEnigmaIfNoneOngoing();
}

function openPopupWrongMonument() {popupWrongMonument.classList.add('popup-open')}
function closePopupWrongMonument() {popupWrongMonument.classList.remove('popup-open')}

function openPopupNoMonument() {popupNoMonument.classList.add('popup-open')}
function closePopupNoMonument() {popupNoMonument.classList.remove('popup-open')}

function openPopupMonumentAlreadyFound() {popupMonumentAlreadyFound.classList.add('popup-open')}
function closePopupMonumentAlreadyFound() {popupMonumentAlreadyFound.classList.remove('popup-open')}

function openPopupEnd() {popupEnd.classList.add('popup-open')}
function closePopupEnd() {popupEnd.classList.remove('popup-open')}

function openPopupHint() {popupHint.classList.add('popup-open')}
function closePopupHint() {popupHint.classList.remove('popup-open')}