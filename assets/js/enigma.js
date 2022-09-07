const COOKIE_ONGOING_ENIGMA = "ongoing_enigma";

function isEnigmaOngoing() {
    return !!getEnigmaOngoing();
}

function getEnigmaOngoing() {
    return Cookies.get(COOKIE_ONGOING_ENIGMA);
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
    setEnigmaOngoing(firstMonument.id);
}