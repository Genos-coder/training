console.log();

//How to make an class

// Encapsulation
class Person {
  constructor(firstName, personAge) {
    (this.name = firstName), (this.age = personAge);
  }
  changePerson(name) {
    this.name = name;
  }
  changeAge(age) {}
}

const person1 = new Person("harsh", 20);

// console.log(person1.age);
person1.changePerson("ganesh");
console.log(person1.name);

//Inheritance

class AngryPerson extends Person {
  constructor(firstName, personAge, isAngry) {
    super(firstName, personAge);
    this.isAngry = isAngry;
  }
}

const angryPerson1 = new AngryPerson("arpit", 21, false);

console.log(angryPerson1);
angryPerson1.changePerson("sahil");
console.log(angryPerson1);

//Polymorphism

class BigPerson extends Person {
  constructor(firstName, personAge, isBig) {
    super(firstName, personAge);
    this.isBig = isBig;
  }
}

const bigPerson1 = new BigPerson("ganesh", 22, true);
console.log(bigPerson1);

// Abstraction
