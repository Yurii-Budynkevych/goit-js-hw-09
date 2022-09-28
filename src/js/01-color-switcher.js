const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);
let timerId;
function onStart(evt) {
  refs.start.setAttribute('disabled', 'true');
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onStop() {
  clearInterval(timerId);
  refs.start.removeAttribute('disabled');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
