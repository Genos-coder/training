//Types
let a1: string = "harsh";
let a2: number = 12;
let a3: boolean = false;
let a4: null;
let a5: undefined;
let a6: unknown;
let a7: never;
let arr1: (string | number | boolean)[] = ["tim"];
let arr2: (string | number)[] = ["tim", "jake"];
let tuple1: [string, number, boolean] = ["tim", 12, false];
let a8: (string | number | boolean)[] = ["hello", "world"];

a8.push(10);
a8;
let a9: [string, number, boolean] = ["tim", 12, false];
let a10: any;
let a11: string = "tim";

a11 = "jake";

console.log(a11);

let obj = {
  name: "hello",
  age: 1,
};

type ObjType = {
  name: string;
  age: number;
  isActive?: boolean;
};

let obj3: ObjType = {
  name: "harsh",
  age: 21,
};

interface Animal {
  legs: number;
  hand: number;
  isAlive: boolean;
}
interface Human extends Animal {
  language: string;
}

const human1: Human = {
  legs: 2,
  hand: 2,
  isAlive: true,
  language: "hindi",
};

let obj2: ObjType = {
  name: "hello",
  age: 1,
};

interface ObjType2 {
  sport: string;
  player?: number;
}

const khela: ObjType2 = {
  sport: "cricket",
  player: 11,
};

//Types in function

function test(name: string) {}

interface PropsType {
  name: string;
  isActive: boolean;
  class: string;
}
function reactComponent(props: PropsType) {
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

function test3(...props: number[]) {
  console.log(props);
}
// test3(1, 2, 3, 4);

function test5({ ...props }) {
  const { name: firstName, isActive } = props;
  console.log(props);
  console.log(firstName, isActive);
}

// test4({ name: "harsh", isActive: true });

function testVar(taker: number | string) {
  if (typeof taker === "number") {
    //
  } else if (typeof taker === "string") {
    //
  } else {
    taker;
  }
}

function test2() {
  while (true) {}
  return new Error("");
}
