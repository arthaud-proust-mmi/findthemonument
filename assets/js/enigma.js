const COOKIE_ONGOING_ENIGMA = "ongoing_enigma";

window.addEventListener("DOMContentLoaded", function(){
  if(!isEnigmaOngoing()) return;

  if(isGameEnded()) return;

  startEnigma(getEnigmaOngoing());
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
        openPopupEnd()
        showGameEndedBottom();
    }
}


