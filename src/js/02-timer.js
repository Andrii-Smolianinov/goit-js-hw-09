import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const startButtonEl = document.querySelector('button');
const selectorEl = document.querySelector('#datetime-picker');
const currentData = new Date();
let futureData = 0;
startButtonEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: currentData,
  minuteIncrement: 1,
  onClose,
};
flatpickr(selectorEl, options);

function onClose(selectedDates) {
  if (currentData > selectedDates[0]) {
    Notiflix.Notify.failure('❌Будь-ласка, виберіть дату з майбутнього');
  }
  if (currentData < selectedDates[0]) {
    Notiflix.Notify.success('✅Супер! Стартуєм!!!');
    startButtonEl.disabled = false;
    futureData = selectedDates[0];
  }
}

startButtonEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  startButtonEl.disabled = true;
  selectorEl.disabled = true;
  const interval = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = futureData - currentTime;
    if (deltaTime <= 0) {
      clearInterval(interval);
    }
    converterTime();
  }, 1000);
}

function converterTime() {
  let today = new Date();
  const differenceData = futureData - today;
  const formatingMilSec = differenceData / 1000;
  const seconds = Math.floor(formatingMilSec) % 60;
  const minutes = Math.floor(formatingMilSec / 60) % 60;
  const hours = Math.floor(formatingMilSec / 60 / 60) % 24;
  const days = Math.floor(formatingMilSec / 60 / 60 / 24);

  daysEl.textContent = days < 10 ? `0${days}` : days;
  hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
  minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
}
