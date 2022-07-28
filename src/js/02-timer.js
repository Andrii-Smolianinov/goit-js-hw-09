daysEl = document.querySelector('[data-days]');
hoursEl = document.querySelector('[data-hours]');
minutesEl = document.querySelector('[data-minutes]');
secondsEl = document.querySelector('[data-seconds]');
startEl = document.querySelector('[data-start]')

startEl.addEventListener('click', () => {
    setInterval(timer, 1000)
});

function timer() {
  const todayData = Date.now();
  const futureData = new Date();
  const differenceData = futureData - todayData;
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

