// console.log("We are at tut BOM");

//Js for section open and close
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
// console.log(window);

let myWindow;
function openWindow() {
  myWindow = window.open("", "", "width=200,height=100");
}
function closeWindow() {
  myWindow.close();
}

openBtn.addEventListener("click", () => {
  openWindow();
});
closeBtn.addEventListener("click", () => {
  closeWindow();
});

console.log(window.history.length);

//Js for section innerWidth and innerHeight

const areaBlock = document.getElementById("area");

window.addEventListener("resize", () => {
  areaBlock.innerText = `Width is ${window.innerWidth} and height is ${window.innerHeight}`;
});

//Js for section pageXOffset and pageYOffset

const area2Block = document.getElementById("area2");

window.addEventListener("scroll", () => {
  area2Block.innerText = `X:-${window.scrollX} \n Y:-${window.scrollY} `;
});

const scrollXEnabler = document.getElementById("scroll-y-btn");
let toggle = true;
scrollXEnabler.addEventListener("click", () => {
  if (toggle) {
    document.body.style.width = "2000px";
    scrollXEnabler.innerText = "Click to get back normal";
    toggle = false;
  } else {
    document.body.style.width = "100%";
    scrollXEnabler.innerText = "Click to see scrollX";
    toggle = true;
  }
});

//If you want reference to opened window
const newWidBtn = document.getElementById("window-open-btn");

newWidBtn.addEventListener("click", () => {
  myWindow = window.open("./child2.html", "", "width=200px,height=200px");

  if (myWindow) {
    let content = `
      <html>
        <head><title>Child Window</title></head>
        <body>
          <div id="hello"></div>
        </body>
      </html>
    `;
    myWindow.document.write(content);
    myWindow.document.close(); //close the document so you can further alter it

    myWindow.document.getElementById("hello").innerHTML =
      "hello from new window";
  } else {
    console.log("some error occurred while creating the new window");
  }
});

const newWidBtn2 = document.getElementById("window-open-btn2");
newWidBtn2.addEventListener("click", () => {
  myWindow = window.open("./child3.html", "", "width=200px,height=200px");
});

//Js for outerHeight and outerWidth

let outerW = window.outerWidth;
let outerH = window.outerHeight;
let innerW = window.innerWidth;
let innerH = window.innerHeight;

document.getElementById("demo").innerHTML =
  "Outer Width: " +
  outerW +
  "<br>" +
  "Outer Height: " +
  outerH +
  "<br>" +
  "Inner Width: " +
  innerW +
  "<br>" +
  "Inner Height: " +
  innerH;

//Extra

console.log(window.location);
console.log(window.location.host);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.port);
console.log(window.location.origin);
console.log(window.location.href);
console.log(window.location.protocol);
//127.0.0.1:5500/02_Javascript/11_Bom/index.html?search=jake
console.log(window.location.search); //PUT ABOVE URL TO SEE THE ANSWER IN THIS CONSOLE.LOG

// console.log(window.navigator);
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(window.navigator.geolocation);
console.log(window.navigator.userAgent);

console.log(window.screen);
