const COOKIE_ONGOING_ENIGMA = "ongoing_enigma";

window.addEventListener("DOMContentLoaded", function(){
  if(!isEnigmaOngoing()) return;

  if(isGameEnded()) {
    showGameEndedBottom();
  } else {
    startEnigma(getEnigmaOngoing());
  }
})

function isEnigmaOngoing() {
    return !!getEnigmaOngoing();
}

function getEnigmaOngoing() {
    return Cookies.get(COOKIE_ONGOING_ENIGMA);
}

function getEnigmaOngoingMonumentData() {
    const enigmaOngoing = getEnigmaOngoing();
    return MONUMENTS.find(monument=>monument.id==enigmaOngoing);
}

function getEnigmaOngoingIndex() {
    if(!isEnigmaOngoing()) return -1;

    const enigmaOngoing = getEnigmaOngoing();
    return MONUMENTS.findIndex(monument=>monument.id==enigmaOngoing);
}

function setEnigmaOngoing(monumentId) {
    return Cookies.set(COOKIE_ONGOING_ENIGMA, monumentId, { sameSite: 'strict', expires: 60 });
}

function showEnigmaSolution() {
    closePopupHint();
    addMonumentToFoundList(getEnigmaOngoing());
    startNextEnigmaOrOpenPopupEnd();
}

function startFirstEnigmaIfNoneOngoing() {
    console.log(!isEnigmaOngoing());
    if(!isEnigmaOngoing()) {
        startFirstEnigma()
    }
}

function startFirstEnigma() {
    firstMonument = MONUMENTS[0];
    startEnigma(firstMonument.id);
}

function startEnigma(monumentId) {
    showInGameBottom();
    setEnigmaOngoing(monumentId);

    // mettre à jour les infos de l'ui
    updateUIInfos();
}

function startNextEnigmaOrOpenPopupEnd() {
    const enigmaOngoingIndex = getEnigmaOngoingIndex();

    if(enigmaOngoingIndex < MONUMENTS.length-1) {
        openPopupMonumentFound(MONUMENTS[enigmaOngoingIndex]);
        const nextEnigmaMonumentId = MONUMENTS[enigmaOngoingIndex+1].id
        startEnigma(nextEnigmaMonumentId);
    } else {
        openPopupEnd(MONUMENTS[enigmaOngoingIndex])
        showGameEndedBottom();
    }
}

//--------------UI----------------//
function updateUIInfos() {
  updateTitle();
  updateEnigma();
  updateProgressBar()
}

function showInGameBottom() {
  bottomGameEnded = document.getElementById('bottom-ended');
  bottomIngame = document.getElementById('bottom-ingame');

  bottomIngame.classList.add('bottom-open');
  bottomGameEnded.classList.remove('bottom-open');
}

function showGameEndedBottom() {
  bottomGameEnded = document.getElementById('bottom-ended');
  bottomIngame = document.getElementById('bottom-ingame');

  bottomGameEnded.classList.add('bottom-open');
  bottomIngame.classList.remove('bottom-open');
}

function updateTitle(){
  const header__step_value = document.querySelector('.header__step-value');
  if(getEnigmaOngoingIndex() <= 0){
    header__step_value.innerHTML =  "Aucun monument trouvé...";
  }
  else{
    const newTitle = MONUMENTS[getEnigmaOngoingIndex()-1].title;
    header__step_value.innerHTML = newTitle;
  }
}
function updateEnigma(){
  const newEnigma = MONUMENTS[getEnigmaOngoingIndex()].enigma;
  const bottom__info_text_item = document.querySelector('#bottom__info-text_item');
  bottom__info_text_item.innerHTML = newEnigma;
}
function updateProgressBar(){
  document.querySelector('#value-progression').innerHTML = getEnigmaOngoingIndex();
  let progessValue = getEnigmaOngoingIndex() * 10;
  document.querySelector(".load-container__progress").style.width = `${progessValue}%`;
}
