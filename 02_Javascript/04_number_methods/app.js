const num1 = 1234;
const num2 = new Number(1234);

console.log(`num1: ${num1} , type: ${typeof num1}`); //type is number
console.log(`num2: ${num2} , type: ${typeof num2}`); //type is object

//Instance methods

let num3 = 2 / 3;
console.log(num3.toFixed(3)); //We  can write the amount of precision to be fixed after decimal point (here 3 in toFixed  = 3 more numbers after decimal point)

let num4 = 625;
console.log(num4.toExponential()); // Output : 6.25e+2 = 6.25 * 10 ^ 2

let num5 = 122 / 3;
console.log(num5.toPrecision(4)); //will add precision starting from first number

let num6 = 12342000;
console.log(num6.toLocaleString("en-Us")); //Us formatting of numbers (money)
console.log(num6.toLocaleString("en-IN")); //Indian formatting of number (money)
let num7 = 123;
console.log(num7.toString()); // output :"123" converts number into string

let num8 = new Number(12);
console.log(num8.valueOf()); // here number is made from number constructor so it's an object in order to print it we have to use valueof
//Static methods

console.log(Number("123")); //converts numeric string into number
console.log(Number.isFinite(1 / 0)); // Returns false if it's a infinity
console.log(Number.isInteger(1.3)); // checks if it's a integer like 10 or non-integer like 1.3
console.log(Number.parseFloat("1.3433")); //Converts floating point numeric string into number ("1.3433" ===> 1.3433)
console.log(Number.parseInt("12345")); //Converts integer numeric string into number ("12345" ===> 12345)
console.log(Number.isSafeInteger(12345654321123423333)); //checks range from -(2⁵³ - 1) to 2⁵³ - 1 cause if it exceeds the range then number losses it's precision

console.log(
  `safe integers are from ${Number.MIN_SAFE_INTEGER} to ${Number.MAX_SAFE_INTEGER}`
);

console.log(Number.isNaN("234")); //checks number is NaN(not a number) eg,  0/0, undefined -1,
console.log(Number.isNaN(0 / 0));
console.log(typeof NaN);
console.log(NaN === NaN);
