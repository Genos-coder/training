"use strict";
function testIt1() { }
const testIt2 = () => { };
const testIt3 = function () { };
testIt3.description = "testing function";
function createDate(timeStampOrH, m, s) {
    if (m !== undefined && s !== undefined) {
        return new Date(timeStampOrH, m, s);
    }
    else {
        return new Date(timeStampOrH);
    }
}
// function test(isActive: boolean, name: string) {
//   console.log(isActive);
//   console.log(name);
// }
// test`${true} is that ${"t-rex"}`;
