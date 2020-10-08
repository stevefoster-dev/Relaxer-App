const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  container.className = "container grow";
  text.innerText = "Breathe In!";
  setTimeout(() => {
    text.innerText = "Hold!";
    setTimeout(() => {
      container.className = "container shrink";
      text.innerText = "Breathe Out!";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
