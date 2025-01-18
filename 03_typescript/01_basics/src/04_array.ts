function test4<T>(param: T) {
  console.log(typeof param);
}

// test4(12);

function mapItNow<Input, Output>(
  arr: Input[],
  callback: (item: Input) => Output
): Output[] {
  return arr.map(callback);
}

type HasId = {
  length: number;
};

function concatIt<T extends HasId>(arr1: T, arr2: T): T {
  if (arr1.length > arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}

const arr3: Array<string> = ["a", "b", "c"];
function test6<T>(param: T) {
  console.log(typeof param);
}
