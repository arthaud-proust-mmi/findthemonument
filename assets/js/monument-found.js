// forme d'une url
// https://findthemonument.netlify.app/#found-192892
// regex d'un id /^\d{6}$/m

const FOUND_HASH_REGEX = /^found-\d{6}$/m;
const ID_REGEX = /^\d{6}$/m;
window.addEventListener('DOMContentLoaded', function() {
    const pageHash = new URL(location).hash;
    console.log(pageHash);
    // on coninue que si le hash correspond à un hash de monument trouvé
    if(!FOUND_HASH_REGEX.test(pageHash)) return;
      

    const monumentId = pageHash.match(ID_REGEX);
    if (monumentId) {
        console.log('ok');
        // popup de félicitations
    } else {
        console.log('pas ok');
        // popup d'erreur
    }
})


