let mins = 0;
let secs = 0;
let tens = 0;
let interval;

const stopwatch = document.querySelector('.stopwatch');
const startBtn = document.querySelector('.cir1 .btn-start');
const stopBtn = document.querySelector('.cir1 .btn-stop');
const resetBtn = document.querySelector('.cir1 .btn-reset');

function startStopwatch() {
  clearInterval(interval);
  interval = setInterval(() => {
    tens++;
    if (tens === 100) {
      secs++;
      tens = 0;
    }
    if (secs === 60) {
      mins++;
      secs = 0;
    }
    stopwatch.innerHTML = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${tens.toString().padStart(2, '0')}`;
  }, 10);
}

startBtn.addEventListener('click', () => {
  startStopwatch();
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  mins = 0;
  secs = 0;
  tens = 0;
  stopwatch.innerHTML = `00:00:00`;
});