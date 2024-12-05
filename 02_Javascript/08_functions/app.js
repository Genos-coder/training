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
