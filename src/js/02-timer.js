import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateSelectorEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const endTime = selectedDates[0];
    //   console.log(endTime);
    if (endTime <= Date.now()) {
      Notify.failure('Please choose a date in the future');
      btnEl.disabled = true;
      } btnEl.disabled = false;
      
    return endTime;
  },
};

let fp = flatpickr(dateSelectorEl, options);
// console.log(fp.selectedDates[0]);

btnEl.addEventListener('click', handleCount);

const timer = {
  isActive: false,
    start() {
    if (this.isActive) {
      return;
    }

    
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const endTime = fp.selectedDates[0];
        const deltaTime = endTime - currentTime;
        if (deltaTime >= 0) {
            const timeMeasure = convertMs(deltaTime);
            // console.log(convertMs(deltaTime));
            updateClockFace(timeMeasure);
        } return;
    }, 1000);
    dateSelectorEl.disabled = true;
    btnEl.disabled = true;
    if (deltaTime === 0) {
        clearInterval(this.intervalId);
        return;
    }
  },
};

function handleCount() {
    timer.start();
    
}

// const endTime = options.selectedDates;
// console.log(currentTime);
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

// console.log(convertMs(2000));
// console.log(convertMs(140000));
// console.log(convertMs(24140000));

function updateClockFace({ days, hours, minutes, seconds }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minutesEl.textContent = `${minutes}`;
  secondsEl.textContent = `${seconds}`;
}
