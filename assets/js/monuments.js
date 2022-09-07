const MONUMENTS = [
    {
        id: '389248',
        title: 'pont-de-pierre',
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.838618056859936,
            lon: -0.5625922731657745,
        }
    },
]    

// forme d'une url
// https://findthemonument.netlify.app/#found-192892
// regex d'un id /^\d{6}$/m

const FOUND_HASH_START_WITH = "#found-";

window.addEventListener('DOMContentLoaded', checkIfMonumentFoundInUrl)


function monumentExistWithId(monumentId) {
    return MONUMENTS.findIndex(monument=>monument.id == monumentId) >= 0;
}

function getFoundMonumentList() {
    const monumentsFoundString = Cookies.get("monuments_found");
    let monumentsFoundList;

    try {
        monumentsFoundList = JSON.parse(monumentsFoundString);
    } catch(e) {
        monumentsFoundList = [];
    }

    return monumentsFoundList;
}

function checkIfMonumentFoundInUrl() {
    const pageHash = (new URL(window.location.href).hash);

    // on coninue que si le hash correspond à un hash de monument trouvé
    if(!pageHash.startsWith(FOUND_HASH_START_WITH)) return;
      

    const monumentId = pageHash.replace(FOUND_HASH_START_WITH,'');
    console.log(monumentId);

    if (monumentExistWithId(monumentId)) {
        addMonumentToFoundList(monumentId);
        
        // popup de félicitation
    }
}

function addMonumentToFoundList(monumentId) {
    monumentsFoundList = getFoundMonumentList();

    console.log(monumentsFoundList);
    if(!monumentsFoundList.includes(monumentId)) {
        monumentsFoundList.push(monumentId)
    }

    console.log(monumentsFoundList);
    Cookies.set("monuments_found", JSON.stringify(monumentsFoundList), { sameSite: 'strict', expires: 60 })
}
