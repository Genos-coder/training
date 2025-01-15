//Create following pattern
/*
if n = 1 pattern should be

 "#"

if n = 2 pattern should be

" # "
"###"

if n = 3 pattern should be

"  #  "
" ### "
"#####"

*/

/*


Thinking in Algorithm  way
step 1: In order to create the pattern we need to run nested loop
step 2: let's create row and col pointers for nested loops 
step 3: First print # all over  then start to create pattern
step 4: We can see that the number of columns are increasing by odd number like if n = 3  as columns will = 2*n-1 
step 5: Create the midpoint so from that midpoint we can use if, if else to print the # and " "(empty space ) to create pattern 
step 6: Making range to print # before mid 
step 7: Making range to print # after mid
*/
// code till step 3
function createPattern(n) {
  for (let row = 0; row < n; row++) {
    let pattern = "";
    for (let col = 0; col < n; col++) {
      pattern += "#";
    }
    console.log("\n");
    console.log(pattern);
  }
}

// function createPattern(n) {
//   let mid = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row <= n; row++) {
//     let pattern = "";
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (mid > col - row && mid < col + row) {
//         //here we are conditionally shifting the mids
//         pattern += "#";
//       } else {
//         pattern += " ";
//       }
//     }
//     // console.log("\n");
//     console.log(pattern);
//   }
// }

// createPattern(3);

//Q-1:make the function which gives the amount of count the character appear in the string
//Q-2: Create function t0 check palindrome
//Q-3: Reverse the string
//Q-4: check character at given index lowercase or not
//Q-5: write javascript function to extract unique string characters from string eg,aabbrrff ans:abrf
//Q-6: Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!
//Q-7: Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//Q-1:make the function which gives the amount of count the character appear in the string

function countChar(str, char) {
  let count = 0;
  let index = str.indexOf(char);
  while (index != -1) {
    ++count;
    index = str.indexOf(char, index + 1);
  }
  return count;
}

// console.log(
//   countChar("this is test string i don't know where we are going", "e")
// );

//Q-2: Create function t0 check palindrome

function checkPalindrome(str) {
  let reverseStr = "";
  for (let i = 0; i < str.length; i++) {
    reverseStr = str[i] + reverseStr;
  }
  return reverseStr == str;
}

// console.log(checkPalindrome("pop"));

//Q-3: Reverse the string

function reverseStr(str) {
  let reverseStr = "";
  for (let i = 0; i < str.length; i++) {
    reverseStr = str[i] + reverseStr;
  }
  return reverseStr;
}

// console.log(reverseStr("hello"));

//Q-4: check character at given index lowercase or not

function checkLowerCase(str, index) {
  if (str[index].toLowerCase() === str[index]) {
    return true;
  } else {
    return false;
  }
}

// console.log(checkLowerCase("heLlo", 2));

//Q-6: Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!
// *
// **
// ***
function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
// printPattern(3);

//Q-7: Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//Algorithm:
//step-1:- create loop and print the n*n
//step-3:- the pattern here is increasing in oad manner so formula here is 2n-1
//step-2:- getting mid and printing * there
function createPattern(n) {
  let mid = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row <= n; row++) {
    let pattern = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (mid > col - row && mid < col + row) {
        //here we are conditionally shifting the mids
        pattern += "#";
      } else {
        pattern += " ";
      }
    }
    // console.log("\n");
    console.log(pattern);
  }
}

// createPattern(3);
