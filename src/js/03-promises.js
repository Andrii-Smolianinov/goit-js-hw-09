import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name=delay]');
const stepEl = document.querySelector('input[name=step]');
const amountEl = document.querySelector('input[name=amount]');
formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const amount = amountEl.value;
  const delay = delayEl.value;
  const step = stepEl.value;
  for (let i = 1; i <= amount; i += 1) {
    setTimeout(() => {
      const position = i;
      const newDelay = (i - 1) * step + +delay;
      createPromise(position, newDelay)
        .then(value => {
          Notiflix.Notify.success(`${value}`);
        })
        .catch(error => {
          Notiflix.Notify.failure(`${error}`);
        });
    }, i * step);
  }
  e.target.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}
