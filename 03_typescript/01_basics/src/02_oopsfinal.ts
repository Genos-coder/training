class Student {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

const stud1 = new Student("harsh", 21);

//inheritance
class ProStudent extends Student {
  constructor(name: string, age: number, public isScholar: boolean) {
    super(name, age);
    this.isScholar = isScholar;
  }
}

class People {
  constructor(private age: number) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}

const p1 = new People(22);

p1.getAge();

class BigPeople extends People {
  constructor(age: number) {
    super(age);
  }
}

const bigPerson1 = new BigPeople(22);

function mapIt<Input, Output>(
  arr: Input[],
  callback: (item: Input) => Output
): Output[] {
  return arr.map(callback);
}

abstract class AbsClass {
  abstract getAge(): number;
}

class Human2 {
  name: string;
  constructor(name: string, age: number) {
    this.name = name;
  }
}
// you can use aria-label to increase the accessibility
// for screen readers
