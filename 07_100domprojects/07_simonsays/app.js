const help = document.getElementById("help");
const helpInfo = document.getElementById("help-info");
const helpClose = document.getElementById("help-close");
const boxContainer = document.querySelector(".box-container");
const footer = document.querySelector("footer");
const startBtn = document.createElement("button");
const colorArr = ["red", "yellow", "green", "blue"];
const currentScoreElem = document.querySelector(".current-score");
const highestScoreElem = document.querySelector(".highest-score");
const statusText = document.querySelector(".status-info");
startBtn.id = "start";
startBtn.innerText = "start";
startBtn.classList.add("btn");
const restartBtn = document.createElement("button");
restartBtn.id = "start";
restartBtn.classList.add("btn");
footer.appendChild(startBtn);
restartBtn.innerText = "Restart";
const audio1 = new Audio("./audio/au_1.mp3");
const audio2 = new Audio("./audio/au_2.mp3");
const audio3 = new Audio("./audio/au_3.mp3");
const audio4 = new Audio("./audio/au_4.mp3");
const audio5 = new Audio("./audio/defeat.mp3");
const audio6 = new Audio("./audio/crazymemory.mp3");

let computerSequence = [];
let userSequence = [];
let highestScore = 0;
let level = 0;
let start = false;
let userClick = false;
help.addEventListener("click", () => {
  helpInfo.showModal();
});

helpClose.addEventListener("click", (e) => {
  helpInfo.close();
});

function checkSequences(index) {
  if (userSequence[index] == computerSequence[index]) {
    if (userSequence.length == computerSequence.length) {
      setTimeout(() => {
        startBlinking();
      }, 2000);
      if (level > Number(highestScoreElem.innerText)) {
        highestScoreElem.innerText = level;
      }
      if (level == 10) {
        audio6.play();
        statusText.innerText = "Your memory is crazy master 🤯!";
        statusText.classList.toggle("big-font");
        setTimeout(() => {
          statusText.innerText = "Master you are great please keep on going! ";
          statusText.classList.toggle("big-font");
          audio6.pause();
        }, 8000);
      }
      currentScoreElem.innerText = level;
    }
    return;
  } else {
    statusText.classList.toggle("big-font");
    statusText.innerText = "You clicked on wrong color 🥲";
    audio5.play();
    setTimeout(() => {
      statusText.innerText = "Master you are great please keep on going!";
      statusText.classList.toggle("big-font");
      audio5.pause();
    }, 8000);
    start = false;
    startBtn.remove();
    footer.appendChild(restartBtn);
    computerSequence = [];
    userSequence = [];
    level = 0;
  }
}
//Making the function which blinks
function blinking(element) {
  setTimeout(function () {
    // console.log(element);
    element.classList.toggle("blinking");
  }, 500);
  element.classList.toggle("blinking");
}

startBtn.addEventListener("click", () => {
  if (!start) {
    startBlinking();
    start = true;
  }
});
restartBtn.addEventListener("click", () => {
  if (!start) {
    startBlinking();
    start = true;
  }
});

function startBlinking() {
  userClick = false;
  level++;
  if (userSequence.length == computerSequence.length) {
    userSequence = [];
  }
  let randomElem = Math.floor(Math.random() * colorArr.length);
  let color = colorArr[randomElem];
  computerSequence.push(color);
  switch (color) {
    case "red": {
      audio1.play();
      break;
    }
    case "yellow": {
      audio2.play();
      break;
    }
    case "green": {
      audio3.play();
      break;
    }
    case "blue": {
      audio4.play();
      break;
    }
    default: {
      //do nothing
    }
  }
  // console.log(computerSequence);
  // console.log(colorArr[randomElem]);
  //   console.log(document.getElementById(nextElem));
  blinking(document.getElementById(colorArr[randomElem]));
  setTimeout(() => {
    userClick = true;
  }, 500);
}
boxContainer.addEventListener("click", (e) => {
  if (!e.target || !userClick || !start) {
    return;
  }

  let userClickElem = e.target;
  let id = userClickElem.getAttribute("id");
  userSequence.push(id);
  switch (id) {
    case "red": {
      audio1.play();
      break;
    }
    case "yellow": {
      audio2.play();
      break;
    }
    case "green": {
      audio3.play();
      break;
    }
    case "blue": {
      audio4.play();
      break;
    }
    default: {
      //do nothing
    }
  }
  blinking(userClickElem);
  // console.log(userSequence);
  checkSequences(userSequence.length - 1);
});
