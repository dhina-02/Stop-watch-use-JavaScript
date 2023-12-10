var stopwatch = document.getElementById("stopwatch");
var startBtn = document.getElementById("start-btn");
var requestId = null;
var startTime = null;
var running = false;

function start() {
  if (!running) {
    running = true;
    startBtn.disabled = true;
    startTime = Date.now() - (ms + sec * 1000 + min * 60000);
    console.log(startTime);
    animateStopwatch();
  }
}

function animateStopwatch() {
  requestId = requestAnimationFrame(animateStopwatch);
  var currentTime = Date.now() - startTime;
  updateStopwatch(currentTime);
}

function updateStopwatch(time) {
  ms = Math.floor((time % 1000) / 10);
  sec = Math.floor((time / 1000) % 60);
  min = Math.floor((time / 60000) % 60);

  stopwatch.innerHTML =
    (min < 10 ? "0" : "") +
    min +
    ":" +
    (sec < 10 ? "0" : "") +
    sec +
    ":" +
    (ms < 10 ? "0" : "") +
    ms;
}

function pause() {
  if (running) {
    running = false;
    cancelAnimationFrame(requestId);
    startBtn.disabled = false;
  }
}

function reset() {
  if (!running) {
    ms = 0;
    sec = 0;
    min = 0;
    updateTime();
    startBtn.disabled = false;
  }
}

var ms = 0;
var sec = 0;
var min = 0;

function updateTime() {
  stopwatch.innerHTML =
    (min < 10 ? "0" : "") +
    min +
    ":" +
    (sec < 10 ? "0" : "") +
    sec +
    ":" +
    (ms < 10 ? "0" : "") +
    ms;
}
