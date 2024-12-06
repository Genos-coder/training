const num1 = parseFloat(prompt("please enter number one"));
const num2 = parseFloat(prompt("please enter number two"));
const operator = prompt("please enter operator").toLowerCase().trim();

switch (operator) {
  case "+": {
    console.log(num1 + num2);
    break;
  }
  case "-": {
    console.log(num1 - num2);
    break;
  }
  case "/": {
    console.log(num1 / num2);
    break;
  }
  case "*": {
    console.log(num1 * num2);
    break;
  }
  case "%": {
    console.log(num1 % num2);
    break;
  }
  default: {
    console.log("please select proper operator and number");
  }
}
