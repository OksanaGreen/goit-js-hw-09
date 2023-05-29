function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
const ColorChangeTime = 1000;
let intervalID = null;
console.log(body);

const ref = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function onStart(evt) {
  body.style.backgroundColor = getRandomHexColor();
  startBtn.disabled = true;
  stopBtn.disabled = false;

  intervalID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, ColorChangeTime);
}

function onStop() {
  clearInterval(intervalID);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timerId = null;

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });
