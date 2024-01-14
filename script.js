const countdown = document.querySelector(".countdown");
const timer = document.querySelector(".timer");
const congrat = document.querySelector(".congrats");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const ques = document.querySelector(".ques");
let hour, minute, second;
const congrats = () => {
  page1.style.display = "none";
  page2.style.display = "grid";
};
const count = setInterval(() => {
  const date = new Date();
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  countdown.innerHTML = `${23 - hour} : ${59 - minute} : ${60 - second}`;
  if (hour == 23 && minute == 59 && second == 59) {
    let pass = null;
    ques.style.display = "flex";
    ques.children[0].addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        pass = e.target.value;
        ques.style.display = "none";
        if (pass == "puppykikitti") {
          setTimeout(() => {
            clearInterval(count);
            timer.style.display = "none";
            congrat.style.display = "block";
            createBalloons(50);
            setTimeout(() => {
              removeBalloons();
              congrats();
            }, 15000);
          }, 800);
        } else {
          ques.style.display = "none";
          return;
        }
      }
    });
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

//over
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});
