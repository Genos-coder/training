"use strict";
function test4(param) {
    console.log(typeof param);
}
// test4(12);
function mapItNow(arr, callback) {
    return arr.map(callback);
}
function concatIt(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1;
    }
    else {
        return arr2;
    }
}
const arr3 = ["a", "b", "c"];
function test6(param) {
    console.log(typeof param);
}
