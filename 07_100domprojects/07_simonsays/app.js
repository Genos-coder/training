const help = document.getElementById("help");
const helpInfo = document.getElementById("help-info");
const helpClose = document.getElementById("help-close");
const boxContainer = document.querySelector(".box-container");
const footer = document.querySelector("footer");
const startBtn = document.createElement("button");
const colorArr = ["red", "yellow", "green", "blue"];
startBtn.id = "start";
startBtn.innerText = "start";
startBtn.classList.add("btn");
const restartBtn = document.createElement("button");
restartBtn.id = "start";
restartBtn.classList.add("btn");
footer.appendChild(startBtn);
let computerSequence = [];
let userSequence = [];
let highestScore = 0;
let currentScore = 0;
let level = 0;
let start = false;
help.addEventListener("click", () => {
  helpInfo.showModal();
});

helpClose.addEventListener("click", (e) => {
  let target = e.target;
});

function checkSequences(index) {
  if (userSequence[index] === computerSequence[computerSequence.length - 1]) {
    if (userSequence.length === computerSequence.length) {
    }
  }
}
//Making the function which blinks
function blinking(element) {
  setTimeout(function () {
    // console.log(element);
    element.classList.toggle("blinking");
  }, 100);
  element.classList.toggle("blinking");
}

startBtn.addEventListener("click", () => {
  if (!start) {
    startBlinking();
    start = true;
  }
});

function startBlinking() {
  level++;
  if (userSequence.length === computerSequence) {
    userSequence = [];
  }
  let randomElem = Math.floor(Math.random() * colorArr.length);
  computerSequence.push(colorArr[randomElem]);
  console.log(colorArr[randomElem]);
  //   console.log(document.getElementById(nextElem));
  blinking(document.getElementById(colorArr[randomElem]));
}
boxContainer.addEventListener("click", (e) => {
  if (e.target === null) {
    return;
  }
  let userClick = e.target;
  userSequence.push(userClick.getAttribute("id"));
});
