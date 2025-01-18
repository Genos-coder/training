"use strict";
//Types
let a1 = "harsh";
let a2 = 12;
let a3 = false;
let a4;
let a5;
let a6;
let a7;
let arr1 = ["tim"];
let arr2 = ["tim", "jake"];
let tuple1 = ["tim", 12, false];
let a8 = ["hello", "world"];
a8.push(10);
a8;
let a9 = ["tim", 12, false];
let a10;
let a11 = "tim";
a11 = "jake";
console.log(a11);
let obj = {
    name: "hello",
    age: 1,
};
let obj3 = {
    name: "harsh",
    age: 21,
};
const human1 = {
    legs: 2,
    hand: 2,
    isAlive: true,
    language: "hindi",
};
let obj2 = {
    name: "hello",
    age: 1,
};
const khela = {
    sport: "cricket",
    player: 11,
};
//Types in function
function test(name) { }
function reactComponent(props) {
    console.log(props);
}
// reactComponent({ name: "harsh", isActive: true, class: "magic bus" });
const testObj = {
    name: "harsh",
    isFinite: true,
};
const testObjCopy = { ...testObj };
const arr = [1, 2];
const arrCopy = [...arr];
// console.log(testObjCopy === testObj);
function test3(...props) {
    console.log(props);
}
// test3(1, 2, 3, 4);
function test5({ ...props }) {
    const { name: firstName, isActive } = props;
    console.log(props);
    console.log(firstName, isActive);
}
// test4({ name: "harsh", isActive: true });
function testVar(taker) {
    if (typeof taker === "number") {
        //
    }
    else if (typeof taker === "string") {
        //
    }
    else {
        taker;
    }
}
function test2() {
    while (true) { }
    return new Error("");
}
