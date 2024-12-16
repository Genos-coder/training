const effecter = document.getElementsByClassName("effecter");
const btnLines1 = document.getElementById("hamburger_insider1");
const btnLines2 = document.getElementById("hamburger_insider2");
const btnLines3 = document.getElementById("hamburger_insider3");
const mobileNav = document.getElementById("mobile_nav");
const btn = document.getElementById("mobile_button");
const TEXT_ARRAY = [
  "Physical Fitness",
  "Weight Lifting",
  "Strength Training",
  "Fat Loss",
  "Weight Gain",
];
const text = document.getElementById("text-container");

for (let item of effecter) {
  item.addEventListener("click", () => {
    btn.classList.toggle("rotater");
    btnLines1.classList.toggle("spinner1");
    btnLines2.classList.toggle("hide_insider");
    btnLines3.classList.toggle("spinner2");
    mobileNav.classList.toggle("active");
  });
}

async function delayer(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, delay);
  });
}

async function wordAdder(word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      text.innerText = text.innerText + word;
      resolve("done");
    }, 200);
  });
}

async function wordRemover(reducingIndex) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      text.innerText = text.innerText.slice(0, reducingIndex);
      resolve("done");
    }, 50);
  });
}

async function writer(string) {
  for (let word of string.split("")) {
    await wordAdder(word);
  }
}
async function eraser(string) {
  for (let i = string.length; i >= 0; i--) {
    await wordRemover(i);
  }
}

async function executer() {
  let i = 0;
  while (i < TEXT_ARRAY.length) {
    for (let content of TEXT_ARRAY) {
      await writer(content);
      await delayer(2000);
      await eraser(content);
    }
    i++;
    if (i > TEXT_ARRAY.length) {
      i = 0;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  executer();
});
