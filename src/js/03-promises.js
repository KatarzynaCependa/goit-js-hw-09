import Notiflix from 'notiflix';

const firstDelayInput = document.querySelector('input[name=delay]');
const delayStepInput = document.querySelector('input[name=step]');
const amountInput = document.querySelector('input[name=amount]');
const btnEl = document.querySelector('button[type=submit]');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
};

createPromise()
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

btnEl.addEventListener('click', createPromise());
