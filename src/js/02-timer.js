import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    pickedDate = selectedDates[0].getTime();
    if (pickedDate < Date.parse(options.defaultDate)) {
      window.alert('Please choose a date in the future');
      btnEl.setAttribute('disabled', '');
    } else {
      btnEl.disabled = false;
    }
  },
};

const inputEl = document.getElementById('datetime-picker');
const btnEl = document.querySelector('button');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

let pickedDate = 0;
let millisecondsLeft = 0;
let timeLeft = 0;
let timerId = {};

flatpickr(inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => {
  if (value < 10) return value.toString().padStart(2, '0');
  return value;
};

const onClick = () => {
  timerId = setInterval(() => {
    millisecondsLeft = pickedDate - new Date().getTime();
    timeLeft = convertMs(millisecondsLeft);
    daysValue.textContent = addLeadingZero(timeLeft.days);
    hoursValue.textContent = addLeadingZero(timeLeft.hours);
    minutesValue.textContent = addLeadingZero(timeLeft.minutes);
    secondsValue.textContent = addLeadingZero(timeLeft.seconds);
  }, 1000);
};

btnEl.addEventListener('click', onClick);
