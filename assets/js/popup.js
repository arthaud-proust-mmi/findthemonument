const popupIntro = document.getElementById('popupIntro');
const popupRules = document.getElementById('popupRules');
const popupWrongMonument = document.getElementById('popupWrongMonument');
const popupNoMonument = document.getElementById('popupNoMonument');
const popupMonumentAlreadyFound = document.getElementById('popupMonumentAlreadyFound');
const popupHint = document.getElementById('popupHint');
const popupEnd = document.getElementById('popupEnd');
const popupInfoMonument = document.getElementById('popupInfoMonument');
const popupMonumentFound = document.getElementById('popupMonumentFound');

const popupCloseBtns = document.querySelectorAll('.btn__close-popup')
popupNoMonument
window.addEventListener('DOMContentLoaded', function() {

    if(!isEnigmaOngoing()) {
        openPopupIntro()
    }

    popupIntro.querySelectorAll('.popup__backdrop, .popup__btn-close, .popup__btn-cta').forEach(el=>{
        el.addEventListener('click', closePopupIntro);
    });

    popupRules.querySelectorAll('.popup__backdrop, .popup__btn-close, .popup__btn-cta').forEach(el=>{
        el.addEventListener('click', closePopupRules);
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

    popupHint.querySelectorAll('.popup__backdrop, .popup__btn-close').forEach(el=>{
        el.addEventListener('click', closePopupHint);
    })
    popupHint.querySelector('.popup__btn-cta').addEventListener('click', showEnigmaSolution);

    popupInfoMonument.querySelectorAll('.popup__backdrop, .popup__btn-close, .popup__btn-cta').forEach(el=>{
        el.addEventListener('click', closePopupInfoMonument);
    })

    popupMonumentFound.querySelectorAll('.popup__backdrop, .popup__btn-close, .popup__btn-cta').forEach(el=>{
        el.addEventListener('click', closePopupMonumentFound);
    })

})


function openPopupIntro() {
    popupIntro.classList.add('popup-open')
}
function closePopupIntro() {
    popupIntro.classList.remove('popup-open')

    startFirstEnigmaIfNoneOngoing();
}
function openPopupRules() {
  popupRules.classList.add('popup-open')
}
function closePopupRules() {
    popupRules.classList.remove('popup-open')

    startFirstEnigmaIfNoneOngoing();
}

function openPopupWrongMonument() {popupWrongMonument.classList.add('popup-open')}
function closePopupWrongMonument() {popupWrongMonument.classList.remove('popup-open')}

function openPopupNoMonument() {popupNoMonument.classList.add('popup-open')}
function closePopupNoMonument() {popupNoMonument.classList.remove('popup-open')}

function openPopupMonumentAlreadyFound() {popupMonumentAlreadyFound.classList.add('popup-open')}
function closePopupMonumentAlreadyFound() {popupMonumentAlreadyFound.classList.remove('popup-open')}

function openPopupEnd(monumentData) {
    popupEnd.querySelector('#popupEnd__text').innerHTML = `Tu as trouvé, c'était bien <b>${monumentData.title}</b>!`
    popupEnd.classList.add('popup-open')
}
function closePopupEnd() {popupEnd.classList.remove('popup-open')}

function openPopupHint() {
    const monumentData = getEnigmaOngoingMonumentData();
    popupHint.querySelector('#popupHint__image').src = monumentData.images.hint;
    popupHint.classList.add('popup-open')
}
function closePopupHint() {popupHint.classList.remove('popup-open')}

function openPopupInfoMonument(monumentData) {
    popupInfoMonument.querySelector('#popupInfoMonument__title').innerText = monumentData.title
    popupInfoMonument.querySelector('#popupInfoMonument__description').innerText = monumentData.description
    popupInfoMonument.querySelector('#popupInfoMonument__funfact-text').innerText = monumentData.funfact
    popupInfoMonument.classList.add('popup-open')
}
function closePopupInfoMonument() {popupInfoMonument.classList.remove('popup-open')}

function openPopupMonumentFound(monumentData) {
    popupMonumentFound.querySelector('#popupMonumentFound__text').innerHTML = `Tu as trouvé, c'était bien <b>${monumentData.title}</b>!`
    popupMonumentFound.classList.add('popup-open')
}
function closePopupMonumentFound() {popupMonumentFound.classList.remove('popup-open')}
