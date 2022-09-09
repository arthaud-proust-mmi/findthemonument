

// forme d'une url
// https://findthemonument.netlify.app/#found-192892
// regex d'un id /^\d{6}$/m

const FOUND_HASH_START_WITH = "#found-";
const COOKIE_MONUMENTS_FOUND = "monuments_found";

window.addEventListener('DOMContentLoaded', checkIfMonumentFoundInUrl)

function monumentExistWithId(monumentId) {
    return MONUMENTS.findIndex(monument=>monument.id == monumentId) >= 0;
}

function checkIfMonumentFoundInUrl() {
    const pageHash = (new URL(window.location.href).hash);

    history.pushState("", document.title, window.location.pathname+ window.location.search);

    // on coninue que si le hash correspond à un hash de monument trouvé
    if(!pageHash.startsWith(FOUND_HASH_START_WITH)) return;
      

    const monumentId = pageHash.replace(FOUND_HASH_START_WITH,'');
    monumentsFoundList = getFoundMonumentList();

    console.log(monumentId);

    if (!monumentExistWithId(monumentId)) {
        openPopupNoMonument();
        return;
    }

    if(monumentsFoundList.includes(monumentId)) {
        openPopupMonumentAlreadyFound();
        return;
    }

    if (monumentId !== getEnigmaOngoing()) {
        openPopupWrongMonument();
        return;
    }

    addMonumentToFoundList(monumentId);

    startNextEnigmaOrOpenPopupEnd();
}

function getFoundMonumentList() {
    const monumentsFoundString = Cookies.get(COOKIE_MONUMENTS_FOUND);
    let monumentsFoundList;

    try {
        monumentsFoundList = JSON.parse(monumentsFoundString);
    } catch(e) {
        monumentsFoundList = [];
    }

    return monumentsFoundList;
}

function addMonumentToFoundList(monumentId) {
    monumentsFoundList = getFoundMonumentList();

    console.log(monumentsFoundList);
    if(!monumentsFoundList.includes(monumentId)) {
        monumentsFoundList.push(monumentId)
    }

    console.log(monumentsFoundList);
    Cookies.set(COOKIE_MONUMENTS_FOUND, JSON.stringify(monumentsFoundList), { sameSite: 'strict', expires: 60 })

    renderOnlyFoundMonuments();
}