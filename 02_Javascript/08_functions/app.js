//Structure of function
/*

function definition : 
    function addNumbers(a,b){
    console.log(a+b);
    }

function body :
    code inside parenthesis
    {
      code
    }

function call :

    addNumbers();

function return statement :

    return "done";

The return statement immediately terminates the execution of the function.
Any code written after the return statement in the function body will not execute.
*/

//Function expression
/*
- Hoisted
- Defined at top level/global scope
- We can called it before it's declaration
*/
function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(1, 2);

console.log(addNumbers(1, 2)); // will console.log undefined because there is no return statement in function

//Function expression (means assigning function definition to an variable)

/*
- Not Hoisted
- Does not get defined at top level/global scope
- We can't called it before it's declaration
*/

const factorial = function (n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};

console.log(factorial(4));

//Using arrow function

const addNumbers2 = (a, b) => {
  console.log(a + b);
};

const addNumbers3 = (a, b) => a + b; // if you want to return single thing you can remove the parenthesis (implicit return)

const multiplyNum = (a, b) => a + b;

//Rest parameter

//Using rest parameter we can take n numbers of arguments in function
function combineNumbers(a, b, ...numArr) {
  // always write rest parameter at the end after all normal parameters
  console.log(numArr.toString());
}

combineNumbers(1, 2, 3, 4);

//Spread syntax in js (we can use spread to destructuring)

//with objects
const batmanMovie = {
  title: "The Batman",
  releaseYear: 2022,
  director: "Matt Reeves",
};

//Providing same key name to variable as of batmanMovie
const { title } = { ...batmanMovie };

console.log(title);

//with arrays

const arr = ["bruce", "wayne"];

// In array we can provide different variable name which can assign the values of spread array to that variable
const [firstName, lastName] = [...arr];

console.log(firstName, lastName);

//assigning different variable name to object keys using spread

const sport = {
  name: "cricket",
  players: 11,
  outdoor: true,
};

const { players: playingXi, name } = { ...sport };

console.log(playingXi);

const day = prompt("Enter the day").toLowerCase();

switch (day) {
  case "monday": {
    console.log("busy day");
    alert("busy day");
    break;
  }

  default: {
    console.log("not so busy");
  }
}

//break and continue with loops
for (var i = 0; i < 20; i++) {
  if (i <= 5) {
    //it will skip the number till 5
    continue;
  } else if (i >= 15) {
    console.log(i); // it will print number from 6 to 15 then it will break the loop
    break;
  } else {
    console.log(i);
  }
}
