// Set up constructor to take name and age
// age default to zero
// getDescription - name is age years old.

class Person {
  // Setting default in argument
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // Template string
    return `Hi! I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    // Super - passes data through to sub-class
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  // this will override version in parent
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

// Traveler subclass - extend Person (extends is a keyword)
// add support for homeLocation
// override getGreeting
// 1. Hi i'm NAME i'm visiting from homeLocation
// 2. Hi i'm name. (if no home location)
class Traveler extends Person {
  // Create constructor, inheriting name + age arguments from parent Class
  constructor(name, age, homeLocation) {
    // super makes parent class data available
    super(name, age);

    // set homeLocation
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    // import parent greeting with `super`
    let greeting = super.getGreeting();

    // if Person has homeLocation, update greeting
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveler('Monika Hoex', 37, 'Hayward, California');
console.log(me.getGreeting());

const you = new Traveler();
console.log(you.getGreeting());
