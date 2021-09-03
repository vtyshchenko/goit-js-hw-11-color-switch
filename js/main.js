const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const body = document.querySelector("body");
const startBtn = document.querySelector("[data-action=start]");
const stopBtn = document.querySelector("[data-action=stop]");

let intervalId = null;
stopBtn.disabled = true;
startBtn.addEventListener("click", onStartClick);
stopBtn.addEventListener("click", onStopClick);

function onStartClick() {
  intervalId = setInterval(changeColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}
function onStopClick() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function changeColor() {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
