//Type signatures
type Person = {
  isAlive?: boolean;
  isFeral: boolean;
  playType: "outdoor" | "indoor";
};

//Type annotation

//for function
type TestFunc = (num: number) => void;

function testIt1() {}

const testIt2: TestFunc = () => {};

//call signature

type DescribableFunc = {
  description: string;
  (num: number): void;
};

const testIt3: DescribableFunc = function () {};
testIt3.description = "testing function";

function createDate(timeStamps: number): Date;
function createDate(h: number, m: number, s: number): Date;
function createDate(timeStampOrH: number, m?: number, s?: number): Date {
  if (m !== undefined && s !== undefined) {
    return new Date(timeStampOrH, m, s);
  } else {
    return new Date(timeStampOrH);
  }
}

// function test(isActive: boolean, name: string) {
//   console.log(isActive);
//   console.log(name);
// }

// test`${true} is that ${"t-rex"}`;
