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

    popupIntro.querySelectorAll('.popup__backdrop, .popup__btn-close, .popup__btn-cta').forEach(el=>{
        el.addEventListener('click', closePopupIntro);
    });

    popupWrongMonument.querySelectorAll('.popup__backdrop, .popup__btn-close, .popup__btn-cta').forEach(el=>{
        el.addEventListener('click', closePopupWrongMonument);
    })

    popupNoMonument.querySelectorAll('.popup__backdrop, .popup__btn-close, .popup__btn-cta').forEach(el=>{
        el.addEventListener('click', closePopupNoMonument);
    })

    popupMonumentAlreadyFound.querySelectorAll('.popup__backdrop, .popup__btn-close, .popup__btn-cta').forEach(el=>{
        el.addEventListener('click', closePopupMonumentAlreadyFound);
    });
    
    popupEnd.querySelectorAll('.popup__backdrop, .popup__btn-close, .popup__btn-cta').forEach(el=>{
        el.addEventListener('click', closePopupEnd);
    })

    popupHint.querySelectorAll('.popup__backdrop, .popup__btn-close, .popup__btn-cta').forEach(el=>{
        el.addEventListener('click', closePopupHint);
    })
    
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