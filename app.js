const timerWrap = document.getElementById('timer-wrap');
const minutesWrap = document.getElementById('minutes-wrap');
const secondsWrap = document.getElementById('seconds-wrap');
const messageWrap = document.getElementById('message-wrap');
const startBtn = document.getElementById('start-button');
const stopBtn = document.getElementById('stop-button');
const resetBtn = document.getElementById('reset-button');

let minutes = 25;
let seconds = minutes * 60;
let interval;


const padZero = num => (num < 10) ? "0" + num : num;

const setDisplay = type => {
  if (type === 'working') {
    minutes = 25;
    messageWrap.innerHTML = 'Time to work 👩‍💻!';
  } else {
    minutes = 5;
    messageWrap.innerHTML = 'Time to chill! ✨';
  }

  seconds = minutes * 60;
  minutesWrap.innerHTML = padZero(minutes);
  secondsWrap.innerHTML = '00';
  messageWrap.classList.add('is-active');
};

const startTimer = () => {
  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(countDown, 1000);
  messageWrap.classList.remove('is-active');
};

const stopTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  stopTimer();
  timerWrap.classList.add('js-working');
  setDisplay('working');
};

const countDown = () => {
  seconds--;

  if (seconds % 60 === 59) {
    minutes--;
    minutesWrap.innerHTML = padZero(minutes);
  }

  if (seconds === 0) {
    stopTimer();

    if (timerWrap.classList.contains('js-working')) {
      timerWrap.classList.remove('js-working');
      setDisplay('break');
    } else {
      timerWrap.classList.add('js-working');
      setDisplay('working');
    }
  }

  secondsWrap.innerHTML = padZero(seconds % 60);
};

setDisplay('working');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
