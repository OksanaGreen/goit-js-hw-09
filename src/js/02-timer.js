import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateFieldSelector = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const ref = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let countDownTime = null;
let deltaTime = null;
let timerID;

startBtn.disabled = true;

startBtn.addEventListener('click', onStart);
// dateFieldSelector.addEventListener('click', onStop);

// Вибір дати

const options = {
  enableTime: true('Вмикає засіб вибору часу'),
  time_24hr: true('Відображає засіб вибору часу '),
  defaultDate: new Date()('Встановлює початкові вибрані дати'),
  minuteIncrement: 1('Регулює крок для введення хвилин'),
  onClose(selectedDates) {
    const startDate = new Date();
    console.log(selectedDates[0]);
    if (selectedDates[0] - startDate < 0) {
      startBtn.disabled = true;
      Notify.failure('Select the date in the FUTURE');
    } else {
      startBtn.disabled = false;
      countDownTime = selectedDates[0];
    }
  },
};
// Відлік часу
flatpickr(dateFieldSelector, options);

function onStart(evt) {
  startBtn.disabled = true;
  dateFieldSelector.disabled = true;

  timerID = setInterval(() => {
    const currentDate = Date.now();
    deltaTime = countDownTime - currentDate;
    const time = convertMs(deltaTime);
    updateTimer(time);
  }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  if (deltaTime < 0) {
    clearInterval(timerID);
    startBtn.disabled = false;
    dateFieldSelector.disabled = false;
    return;
  }

  ref.days.textContent = `${days}`;
  ref.hours.textContent = `${hours}`;
  ref.minutes.textContent = `${minutes}`;
  ref.seconds.textContent = `${seconds}`;
}

// onClose()
// window.alert("Please choose a date in the future")
// startBtn.disabled = true;
// stopBtn.disabled = false;

// Форматування часу Counting functions
function pad(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
