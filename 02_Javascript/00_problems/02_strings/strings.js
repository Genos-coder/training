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

createPattern(3);
