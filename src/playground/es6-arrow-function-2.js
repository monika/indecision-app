// argument object - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(add(1, 4));

// 'this' keyword - no longer bound
const user = {
  name: "Monika",
  cities: ["Fremont", "Oakland", "Livermore"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city + "!");
  }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
