var hours = 0;
var mins = 0;
var seconds = 0;
var miliSeconds = 0;

var hoursDisp = document.getElementById("hoursDisp");
var minDisp = document.getElementById("minDisp");
var secondsDisp = document.getElementById("secondsDisp");
var milisecondsDisp = document.getElementById("milisecondsDisp");

function renderTimer() {
  hoursDisp.innerHTML = hours;
  minDisp.innerHTML = mins;
  secondsDisp.innerHTML = seconds;
  milisecondsDisp.innerHTML = miliSeconds;
}
var interval;
function startTimer() {
  interval = setInterval(function () {
    miliSeconds++;
    if (miliSeconds == 10) {
      miliSeconds = 0;
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        mins++;
        if (mins == 60) {
          mins = 0;
          hours++;
        }
      }
    }
    renderTimer();
  }, 100);
}

function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  stopTimer();
  hours = 0;
  mins = 0;
  seconds = 0;
  miliSeconds = 0;
  renderTimer();
}
