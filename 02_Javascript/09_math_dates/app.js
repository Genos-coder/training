console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(1.5));
console.log(Math.floor(1.8)); //round off the number to the lowest near integer
console.log(Math.ceil(1.2)); // round off the number to the largest near integer
console.log(Math.sqrt(4)); //output:2
console.log(Math.min(23, 111, 445, 1234));
console.log(Math.max(23, 111, 445, 1234));
console.log(Math.abs(-10)); //out+put:10 (taking modulus of number)
console.log(Math.pow(2, 2)); //Math.pow(number,power)

const randomNum = Math.random(); // output:random number between 0 to 1
console.log(randomNum);
//Question: create the rolling dice using Math.random()

const faceNum = Math.ceil(Math.random() * 6); //output: between 1 to 6
console.log(faceNum);
//DATES In JS

const date1 = new Date();
console.log(date1);
console.log(date1.getTime());
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDay());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());
console.log(date1.getMilliseconds());
console.log(date1.setTime(5 * 60 * 1000)); //setting 5 hours using milliseconds

console.log(date1.setFullYear(2024));
console.log(date1.setMonth(10)); // here 10 represents november because of zero based indexing
console.log(date1.setDate(22));
console.log(date1.setMinutes(40));
console.log(date1.setSeconds(3));
console.log(date1.setMilliseconds(959));
console.log(date1);

const date2 = Date.now(); //Gives timestamp
console.log(date2);
