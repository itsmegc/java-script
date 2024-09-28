// methods
// function inside objects

// const person = {
//   firstName: "James",
//   age: 55,
//   about: function () {
//     // console.log(this) // this is object   {firstName: 'James', age: 55, about: ƒ}
//     console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//   },
// };

function personInfo() {
  console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}
const person1 = {
  firstName: "James",
  age: 55,
  about: personInfo,
};

const person2 = {
  firstName: "Mohit",
  age: 17,
  about: personInfo,
};

const person3 = {
  firstName: "Rahul",
  age: 77,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();
