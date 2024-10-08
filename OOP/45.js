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
const personX = {
  firstName: "James",
  age: 55,
  about: personInfo,
};

const personY = {
  firstName: "Mohit",
  age: 17,
  about: personInfo,
};

const personZ = {
  firstName: "Rahul",
  age: 77,
  about: personInfo,
};

personX.about();
personY.about();
personZ.about();

// examples

// Method for person info
function personInfo() {
  console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

// Object instances
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

const person4 = {
  firstName: "Sarah",
  age: 29,
  about: personInfo,
};

const person5 = {
  firstName: "Emma",
  age: 34,
  about: personInfo,
};

const person6 = {
  firstName: "Daniel",
  age: 45,
  about: personInfo,
};

const person7 = {
  firstName: "Jessica",
  age: 21,
  about: personInfo,
};

const person8 = {
  firstName: "Michael",
  age: 62,
  about: personInfo,
};

const person9 = {
  firstName: "Sophie",
  age: 40,
  about: personInfo,
};

const person10 = {
  firstName: "David",
  age: 38,
  about: personInfo,
};

// Calling the about method for each person
person1.about();
person2.about();
person3.about();
person4.about();
person5.about();
person6.about();
person7.about();
person8.about();
person9.about();
person10.about();
