const countdown = document.querySelector(".countdown");
const timer = document.querySelector(".timer");
const congrat = document.querySelector(".congrats");
let hour, minute, second;
const congrats = () => {
  let a;
};
const count = setInterval(() => {
  const date = new Date();
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  countdown.innerHTML = `${23 - hour} : ${59 - minute} : ${60 - second}`;
  if (hour == 23 && minute == 59 && second == 59) {
    setTimeout(() => {
      clearInterval(count);
      timer.style.display = "none";
      congrat.style.display = "block";
      createBalloons(50);
      setTimeout(() => {
        removeBalloons();
        congrats();
      }, 5000);
    }, 800);
  }
}, 100);
const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove();
  }, 500);
}
