var nameVar = "Monika";
nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jane";
nameLet = "Joe";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

var fullName = "Monika Hoex";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
