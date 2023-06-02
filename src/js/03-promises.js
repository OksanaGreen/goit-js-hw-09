import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  startBtn: document.querySelector('button'),
  form: document.querySelector('form'),
  //  перша затримка
  delayInput: document.querySelector('input[name="delay"]'),
  // кожна наступна
  stepInput: document.querySelector('input[name="step"]'),
  // кількість промісів
  amountInput: document.querySelector('input[name="amount"]'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const delay = Number(refs.delayInput.value);
  const step = Number(refs.stepInput.value);
  const amount = Number(refs.amountInput.value);
  console.log(delay, step, amount);

  // refs.startBtn.disabled = true;

  if (delay < 0 || step < 0 || amount < 0) {
    Notify.warning(`Enter number more than 0`);
  } else if (Number(amount) === 0) {
    Notify.warning(`Enter number more than 0`);
  } else {
    for (let i = 0; i < amount; i += 1) {
      const promise = createPromise(i, delay + step * i);

      promise
        .then(({ position, delay }) => {
          console.log({ position, delay });
          Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log({ position, delay });
          Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
        });
    }
  }
}
