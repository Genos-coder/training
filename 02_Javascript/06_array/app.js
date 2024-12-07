//Different ways if declaring arrays in js
var arr1 = [1, 2, 3];
var arr2 = new Array(5); // This is array of length 5
var arr3 = Array(10); //This creates same shit with length 10

// array instance methods
console.log([1, 2, 3].at(0));
//Array mutating methods
var arr5 = [1, 2, 3, 4, 5, 6];
console.log(arr5.fill(1, 2, arr5.length));
var arr6 = [1, 2, 3, 4, 5, 6];
console.log(arr6.copyWithin(1, 4, 5));
var arr7 = [1, 2, 3, 4, 5, 6];
console.log(arr7.reverse());
var arr8 = [1, 2, 3, 4, 5, 6];
console.log(arr8.splice(2, 3)); //it returns element which where deleted
var arr9 = [100, 30, 60, 88, 1111];
console.log(
  arr9.sort(function (a, b) {
    return a - b;
  })
); //we need to specify the function which subtract the a as starting element and b as after element if the calculation   results in negative number the number get's swapped.
//we can reverse the array from largest to smallest
console.log(
  arr9.sort(function (a, b) {
    return b - a;
  })
);
var arr10 = [1, 2, 3, 4];
console.log(arr10.push(1)); //push the element at the end of array and returns the total length
var arr11 = [1, 2, 3, 4];
console.log(arr11.pop()); //Removes the last element and returns it
var arr12 = [1, 2, 3, 4];
console.log(arr12.unshift(12)); //put element at start and returns total length
var arr13 = [1, 2, 3, 4];
console.log(arr13.shift()); //removes starting element and returns it
//The alternative non-mutating methods
console.log([1, 2, 3, 4].toSpliced(2, 2));
console.log(arr13.concat([100, 101, 102]));
console.log(
  [12, 333, 432, 21, 2].toSorted(function (a, b) {
    return a - b;
  })
);
console.log([1, 2, 3, 4].toReversed());
console.log([1, 2, 3, 4, 5].slice(0, -1)); //this created the shallow copy array not deep copy
//Array instance methods
var arr14 = [1, 2, 3, 4, 6];
console.log([1, 2, 3, 4, 5].indexOf(4));
console.log(arr14.join(""));
console.log(
  [1, 2, 3, 4].map(function (item) {
    return item * 2;
  })
);
console.log(
  arr14.find(function (item) {
    return item === 2;
  })
); //finds
console.log(
  arr14.findIndex(function (item) {
    return item === 2;
  })
);
console.log(
  arr14.findLast(function (item) {
    return item === 2;
  })
);
console.log(
  arr14.findLastIndex(function (item) {
    return item === 2;
  })
);
console.log(
  arr14.filter(function (item) {
    return item > 2;
  })
);
console.log(
  arr14.every(function (item) {
    return typeof item === "number";
  })
);
console.log(
  arr14.some(function (item) {
    return item % 2 === 0;
  })
);
console.log(
  arr14.reduce(function (acc, curr) {
    return acc + curr;
  }, 0)
);
console.log([1, [2, [3, [4]]]].flat(3));
console.log(
  arr14.flatMap(function (item) {
    return [item, item * item];
  })
);
console.log(arr14.includes(12));
//Array static methods
var arr15 = Array.from({ length: 5 }, function (i, _) {
  return _;
});
console.log(Array.from);
