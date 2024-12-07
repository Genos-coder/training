//We can use advance console to debug,visualize,analyze the code

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  yearPublished: 1925,
  genre: "Fiction",
  pages: 180,
};

// console.table(book);

//we can get duration of execution of code by wrapping it inside console.time and console.timeEnd

//Creating function to print table

function printTable1(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

function printTable2(n) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1000) {
    //artificially creating the delay
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
// console.time("table one");
// printTable1(2);
// console.timeEnd("table one");
// console.time("table two");
// printTable2(2);
// console.timeEnd("table two");

//Using performance.now() will creates wait loop but will block event loop

//console.dir

const obj = {
  place: "New York",
  aliens: 10,
  heros: 100,
};

// console.log(obj); //Will print object in string representation
// console.dir(obj); //Will print object in a expandable list

//console.assert

const arr = [1, 2, 3, "bunny", "bunny", "jerry", "tom", "iron man"];

// console.assert(
//   arr.find((item) => item === "tony"),
//   "the item your are searching does not exist"
// );

// console.assert(12 > (12 * 12) / 12 + 1, "assertion failed");

//console.count (basically count how many time same shit got printed )

// arr.forEach((item) => (item == "bunny" ? console.count("bunny") : ""));
function greet(name) {
  console.count(name);
}

// greet("rishi");
// greet("sushi");
// greet("rishi");
// greet("sushi");
// greet("sushi");
// greet("rishi");
// greet("sushi");

//console.trace gives idea about which function or code executes line by line

function firstFunction() {
  secondFunction();
}

function secondFunction() {
  thirdFunction();
}

function thirdFunction() {
  console.trace("Trace this function ");
}

firstFunction();

//console.group (to group the console messages in proper format)

console.group("this is parent1");
console.log("msg 1");
console.log("msg 2");
console.group("this is parent 2");
console.log("msg 1");
console.log("msg 2");
console.groupEnd();
console.groupEnd();

//using css inside console

console.log("%c I am a logging master", "color:black; background-color:pink;");
