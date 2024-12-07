const obj = {
  name: "ganesh",
  age: 22,
};

const target = {
  a: 1,
  b: 2,
};

const source = {
  b: 10,
  c: 12,
};

const modifiedTarget = Object.assign(target, source);

// console.log(modifiedTarget);
// console.log(modifiedTarget === target);

const person = {
  isHuman: true,
  setItsModelNumber(num) {
    return num;
  },
};
const newObj = Object.create(person);

// console.log(newObj.isHuman);

// making array of key and value pair of objects

const obj2 = {
  name: "jorden",
  lastname: "peterson",
};

for (let [key, value] of Object.entries(obj2)) {
  //   console.log(key, value);
}
console.log(Object.hasOwn(obj2, "name"));

console.log(Object.is(1, 1));
console.log(Object.is(target, modifiedTarget));

console.log(Object.keys(obj2));
console.log(Object.values(obj2));
