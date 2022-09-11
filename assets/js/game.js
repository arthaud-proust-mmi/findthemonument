const UI_SHOW_MS_DELAY = 0;
const UI_HIDE_MS_DELAY = 0;
var uiTimeout;

window.addEventListener('DOMContentLoaded', function() {
    showUI();

    document.getElementById('btn-restartgame').addEventListener('click', function() {
        Cookies.remove(COOKIE_MONUMENTS_FOUND, { sameSite: 'strict'})
        Cookies.remove(COOKIE_ONGOING_ENIGMA, { sameSite: 'strict'})
        document.location.reload();
    })

    document.getElementById('btn-share').addEventListener('click', function() {
        navigator.share({
            title: document.title,
            text: 'Découvre la ville de Bordeaux avec une chasse au trésor !\n',
            url: 'https://findthemonument.netlify.app',
          }); 
    })

    if(isGameEnded()) {
        showGameEndedBottom();
        showGameEndedHeader();
    }
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

function showIngameHeader() {
    const ingameHeader = document.getElementById('header-ingame');
    const gameEndedHeader = document.getElementById('header-ended');

    ingameHeader.classList.add('header-visible');
    gameEndedHeader.classList.remove('header-visible');
}
function showGameEndedHeader() {
    const ingameHeader = document.getElementById('header-ingame');
    const gameEndedHeader = document.getElementById('header-ended');

    gameEndedHeader.classList.add('header-visible');
    ingameHeader.classList.remove('header-visible');
}

function showIngameBottom() {
  const gameEndedEnded = document.getElementById('bottom-ended');
  const ingameBottom = document.getElementById('bottom-ingame');

  ingameBottom.classList.add('bottom-open');
  gameEndedEnded.classList.remove('bottom-open');
}

function showGameEndedBottom() {
  const gameEndedEnded = document.getElementById('bottom-ended');
  const ingameBottom = document.getElementById('bottom-ingame');

  gameEndedEnded.classList.add('bottom-open');
  ingameBottom.classList.remove('bottom-open');
}

function updateTitle(){
  const header__step_value = document.querySelector('.header__step-value');
  if(getEnigmaOngoingIndex() <= 0){
    header__step_value.innerHTML =  "Aucun pour l'instant";
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
  const actualStep = getEnigmaOngoingIndex()+1;
  document.querySelector('#value-progression').innerHTML = actualStep;
  let progessValue = actualStep * 10;
  document.querySelector(".load-container__progress").style.width = `${progessValue}%`;
}

function willHideUI() {
    clearTimeout(uiTimeout);
    uiTimeout = setTimeout(hideUI, UI_HIDE_MS_DELAY);
}

function willShowUI() {
    clearTimeout(uiTimeout);
    uiTimeout = setTimeout(showUI, UI_SHOW_MS_DELAY);
}

function hideUI() {
    document.getElementById('headers').classList.remove('headers-visible');
    document.getElementById('bottoms').classList.remove('bottoms-visible');
    document.getElementById('actions').classList.remove('actions-visible');
}

function showUI() {
    document.getElementById('headers').classList.add('headers-visible');
    document.getElementById('bottoms').classList.add('bottoms-visible');
    document.getElementById('actions').classList.add('actions-visible');
}

function toggleUI() {
    document.getElementById('headers').classList.toggle('headers-visible');
    document.getElementById('bottoms').classList.toggle('bottoms-visible');
    document.getElementById('actions').classList.toggle('actions-visible');
}