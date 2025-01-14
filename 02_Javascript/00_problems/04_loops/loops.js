//Q-1: Find sum all natural numbers from 1 to n
//Q-2:Sum of digits of numbers
//here input is 1234 and output is 10
//Q-3:Count the number of digits of the number
//Q-4:Check if number is palindrome
//Q-5:Find fibonacci of n number
//Q-6: Missing Number in an Array
//Q-7:count odds in the given range
//Q-8:FizzBuzz problem
//Q-9:Return true if integer is power of two
//Q-10: Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well and You must not use any built-in exponent function or operator.

//Q-1: Find sum all natural numbers from 1 to n

function sumOfNum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumOfNum(3));

//Q-2:Sum of digits of numbers

function sumOfDigits(n) {
  let copy = n;
  let sum = 0;
  while (copy >= 1) {
    let lastNum = copy % 10;
    sum += lastNum;
    copy = Math.floor(copy / 10);
  }
  return sum;
}

// console.log(sumOfDigits(4234));

//Q-3:Count the number of digits of the number

function countDigit(n) {
  let count = 0;
  let copy = n;
  while (copy >= 1) {
    copy = Math.floor(copy / 10);
    count++;
  }
  return count;
}

// console.log(countDigit(1234));

//Q-4:Check if number is palindrome
function checkPalindrome(n) {
  let copy = n;
  let reverseNum = 0;

  while (copy >= 1) {
    let lastDigit = Math.floor(copy % 10);
    reverseNum = reverseNum * 10 + lastDigit;
    copy = Math.floor(copy / 10);
  }
  return n == reverseNum;
}

// console.log(checkPalindrome(1191));

//Q-5:Find fibonacci of n number
// 0 =>1 , 1 =>1 , 2 =>1 , 3 =>2

function fibOfNum(n) {
  if (n < 2) {
    return n;
  }
  let prev = 0;
  let curr = 1;
  let next;
  for (let i = 2; i <= n; i++) {
    next = curr + prev;
    prev = curr;
    curr = next;
  }
  return next;
}

// console.log(fibOfNum(4));

//Q-6: Missing Number in an Array

function findNum(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr);
  let actualSum = 0;
  for (let i = 0; i <= arr.length; i++) {
    actualSum += i;
  }
  return actualSum - sum;
}

// console.log(findNum([0, 1, 2, 3, 4, 6, 7]));

//Q-7:count odds in the given range

function countOdds(low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

// console.log(countOdds(3, 10));

// Q-8:FizzBuzz problem

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    }
  }
}

// fizzBuzz(15);

//Q-9:Return true if integer is power of two

function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
}

console.log(isPowerOfTwo(16));

//Q-10: Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well and You must not use any built-in exponent function or operator.
function sqrt(x) {
  let i = 0;
  while (true) {
    if (i * i === x) {
      break;
    } else if (i * i > x) {
      break;
    }
    i++;
  }
  return i;
}

console.log(sqrt(20));
