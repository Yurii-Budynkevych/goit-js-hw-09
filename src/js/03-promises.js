import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('#qwe'),
  step: document.querySelector('#asd'),
  amount: document.querySelector('#zxc'),
};
refs.form.addEventListener('submit', onSubmit);
// ________________________________________________________________________________
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
// ________________________________________________________________________________
function onSubmit(evt) {
  evt.preventDefault();
  let firstDelay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  for (let index = 1; index <= amount; index++) {
    createPromise(index, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += step;
  }

  evt.currentTarget.reset();
}
