let intervalId;
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('#qwe'),
  step: document.querySelector('#asd'),
  amount: document.querySelector('#zxc'),
};
refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  const delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  firstDelay(delay, amount);
  nextDelay(step, amount);
  evt.preventDefault();
  evt.currentTarget.reset();
}

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

function firstDelay(ms, number) {
  if (number <= 0) {
    return;
  }
  setTimeout(() => {
    createPromise(1, ms)
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
  }, ms);
}
function nextDelay(ms, number) {
  if (number <= 1) {
    return;
  }
  let i = 1;
  intervalId = setInterval(() => {
    i += 1;
    if (i > number) {
      clearInterval(intervalId);
      return;
    }
    createPromise(i, ms)
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
  }, ms);
}
// and the option with "for" below please =)
