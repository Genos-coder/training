// console.log("This is loops tutorial");

//Do-while (Runs at least one time)

let i = 1;

do {
  //   console.log(i);
  ++i;
} while (i <= 0);

//While loop

let j = 1;

while (j <= 0) {
  //   console.log(j);
  j++;
}

//for loop

for (let k = 1; k <= 10; k++) {
  //   console.log(k);
}

//Loops to print array and objects

// for in

const arr3 = [1, 2, 3, 4, 5];

for (let num in arr3) {
  //   console.log(arr3[num]);
}

//With objects

const student = {
  name: "Rishi",
  age: 21,
  isActive: true,
};

for (let key in student) {
  //   console.log(student[key]);
}

//For of

for (let num of arr3) {
  //   console.log(num);
}

for (let key of Object.keys(student)) {
  //   console.log(key);
}

//Creating table of two

// for (let num = 1; num <= 10; num++) {
//   let sum = num * 2;
//   console.log(sum);
// }

// console.time();
// let num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }
// console.timeEnd();
// console.time();
// for (let i = 1; i <= 10; i++) {
//   console.log(i * 2);
// }
// console.timeEnd();

// let a = 1;
// let sum = 0;
// while (a <= 10) {
//   sum = a * 10;
//   a++;
//   console.log(sum);
// }
