//index assertions

type ObjType3 = {
  [index: string]: string | number | boolean;
  name: string;
  age: number;
  isGood: boolean;
};

let obj4: ObjType3 = {
  name: "tim",
  age: 13,
  isGood: false,
};

for (let key in obj4) {
  console.log(obj4[key]); //we cannot use dynamic properties here
}

// one more way to remove any time from dynamically added keys inside obj box notation is keyof assertion

type ObjType4 = {
  name: string;
  age: number;
  isGood: boolean;
};

let obj5: ObjType4 = {
  name: "jake",
  age: 26,
  isGood: true,
};

for (let key in obj5) {
  console.log(obj5[key as keyof typeof obj5]);
}

function propPrinter(obj: ObjType4, key: keyof typeof obj) {
  console.log(obj[key]);
}
