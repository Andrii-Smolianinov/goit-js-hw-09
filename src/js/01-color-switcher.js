const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let colorSet = null;

startButtonEl.addEventListener('click', onStartChangesColor);
stopButtonEl.addEventListener('click', onStopChangesColor);

function onStartChangesColor() {
  startButtonEl.disabled = true;
  colorSet = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopChangesColor() {
  startButtonEl.disabled = false;
  clearInterval(colorSet);
}


