// import Notiflix from 'notiflix';
// const refs = {
//   form: document.querySelector('.form'),
//   delay: document.querySelector('input[name=delay]'),
//   step: document.querySelector('input[name=step]'),
//   amount: document.querySelector('input[name=amount]'),
// };

// refs.form.addEventListener('submit', onSubmitForm);

// function onSubmitForm(e) {
//   e.preventDefault();
//   const amount = refs.amount.value;
//   const delay = refs.delay.value;
//   const step = refs.step.value;
//   for (let i = 1; i <= amount; i += 1) {
//     setTimeout(() => {
//       const position = i;
//       const newDelay = (i - 1) * step + +delay;
//       createPromise(position, newDelay)
//         .then(value => {
//           Notiflix.Notify.success(`${value}`);
//         })
//         .catch(error => {
//           Notiflix.Notify.failure(`${error}`);
//         });
//     }, i * step);
//   }
//   e.target.reset();
// }

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