
const refs = {
    btnStartEl: document.querySelector('button[data-start]'),
    btnStopEl: document.querySelector('button[data-stop]'),
    bodyBckgrdEl: document.querySelector('body')
}

const CHANGE_INTERVAL = 1000;

refs.btnStartEl.addEventListener('click', handleStartBtn);
refs.btnStopEl.addEventListener('click', handleStopBtn);

let intervalId = 0;

function handleStartBtn() {
    refs.bodyBckgrdEl.style.backgroundColor = getRandomHexColor();
    refs.btnStartEl.disabled = true;

    intervalId = setInterval(() => {
        refs.bodyBckgrdEl.style.backgroundColor = getRandomHexColor();
    }, CHANGE_INTERVAL)
}

function handleStopBtn() {
    clearInterval(intervalId);
    refs.btnStartEl.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
