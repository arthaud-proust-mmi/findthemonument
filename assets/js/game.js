window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-restartgame').addEventListener('click', function() {
        Cookies.remove(COOKIE_MONUMENTS_FOUND, { sameSite: 'strict'})
        Cookies.remove(COOKIE_ONGOING_ENIGMA, { sameSite: 'strict'})
        document.location.reload();
    })

    document.getElementById('btn-share').addEventListener('click', function() {
        navigator.share({
            title: document.title,
            text: 'Découvre la ville de Bordeaux avec une chasse au trésor!',
            url: 'https://findthemonument.netlify.app',
          }); 
    })
})

function isGameEnded() {
    if(getEnigmaOngoingIndex() < MONUMENTS.length-1) return false;
    if(getFoundMonumentList().includes(getEnigmaOngoing())) return true;

    return false;
}

//--------------UI----------------//
function updateUIInfos() {
  updateTitle();
  updateEnigma();
  updateProgressBar()
}

function showHeader() {
    document.getElementById('header').classList.add('header-visible');
}
function hideHeader() {
    document.getElementById('header').classList.remove('header-visible');
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
