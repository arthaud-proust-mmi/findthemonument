const COOKIE_ONGOING_ENIGMA = "ongoing_enigma";

function isEnigmaOngoing() {
    return !!getEnigmaOngoing();
}

function getEnigmaOngoing() {
    return Cookies.get(COOKIE_ONGOING_ENIGMA);
}

function getEnigmaOngoingIndex() {
    if(!isEnigmaOngoing()) return -1;

    const enigmaOngoing = getEnigmaOngoing();
    return MONUMENTS.findIndex(monument=>monument.id==enigmaOngoing);
}

function setEnigmaOngoing(monumentId) {
    return Cookies.set(COOKIE_ONGOING_ENIGMA, monumentId, { sameSite: 'strict', expires: 60 });
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
    setEnigmaOngoing(monumentId);

    // mettre à jour les infos de l'ui
}

function startNextEnigmaOrOpenPopupEnd() {
    const enigmaOngoingIndex = getEnigmaOngoingIndex();
    
    console.log(enigmaOngoingIndex);
    console.log(MONUMENTS.length-1);
    if(enigmaOngoingIndex < MONUMENTS.length-1) {
        const nextEnigmaMonumentId = MONUMENTS[enigmaOngoingIndex+1].id
        startEnigma(nextEnigmaMonumentId);
    } else {
        openPopupEnd()
    }
}