"use strict";
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
const stud1 = new Student("harsh", 21);
//inheritance
class ProStudent extends Student {
    isScholar;
    constructor(name, age, isScholar) {
        super(name, age);
        this.isScholar = isScholar;
        this.isScholar = isScholar;
    }
}
class People {
    age;
    constructor(age) {
        this.age = age;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
const p1 = new People(22);
p1.getAge();
class BigPeople extends People {
    constructor(age) {
        super(age);
    }
}
const bigPerson1 = new BigPeople(22);
function mapIt(arr, callback) {
    return arr.map(callback);
}
class AbsClass {
}
class Human2 {
    name;
    constructor(name, age) {
        this.name = name;
    }
}
// you can use aria-label to increase the accessibility
// for screen readers
