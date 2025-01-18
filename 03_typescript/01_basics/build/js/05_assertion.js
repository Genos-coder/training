"use strict";
//index assertions
let obj4 = {
    name: "tim",
    age: 13,
    isGood: false,
};
for (let key in obj4) {
    console.log(obj4[key]); //we cannot use dynamic properties here
}
let obj5 = {
    name: "jake",
    age: 26,
    isGood: true,
};
for (let key in obj5) {
    console.log(obj5[key]);
}
function propPrinter(obj, key) {
    console.log(obj[key]);
}
