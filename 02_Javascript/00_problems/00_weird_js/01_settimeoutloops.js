for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}
/*

first iteration ->

here var i is 0 but below setTimeout is scheduled
{
    setTimeout will runs but schedule for 1 milliseconds
}
second iteration ->
here var i is 1 but below setTimeout is scheduled
{
    setTimeout will runs but schedule for 1 milliseconds
}
third iteration ->
here var i is 2 but below setTimeout is scheduled
{
    setTimeout will runs but schedule for 1 milliseconds
}

after three iteration the value of i is 2 but one more iteration is done which set the i 3 and halt the loop but all three settimeout executes with the global value of var which is three 
so after schedule is done by all setTimeout they will look for i which is a global variable declared with var keyword so all of them will print 3


*/
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}

/*
here the i is in block 
{
i is 0
setTimeout will get this block scope variable value of i and don't search for global scope because i is block scope
}
{
i is 1
so does settimeout get't the value of i as 1
}
{
i is 2
so does settimeout get't the value of i as 2
}

*/
