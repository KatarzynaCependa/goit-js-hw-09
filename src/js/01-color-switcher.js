function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

const onStartClick = () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', '');
  stopBtn.disabled = false;
};

const onStopClick = () => {
  startBtn.disabled = false;
  clearInterval(timerId);
  stopBtn.setAttribute('disabled', '');
};

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);
