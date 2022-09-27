import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // if (selectedDates[0].getTime() < this.defaultDate.getTime()) {
    //   return window.alert('wv');
    // }
  },
};

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
};

refs.dateInput.addEventListener('click', onInput);
function onInput(e) {
  flatpickr(refs.dateInput, options);
}
