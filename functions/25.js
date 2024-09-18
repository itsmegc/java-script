// rest parameter

function myFunc(a, b, ...c) {
  console.log(`value of a is ${a}`);
  console.log(`value of b is ${b}`);
  console.log(c);
}

myFunc(1, 5, 9, 6, 10, 12);

// param destructing

// object
// react

const person = {
  name: "gaurav",
  age: "31",
};

// function printDetail(obj) {
//   console.log(obj.name);
//   console.log(obj.age);
// }

function printDetail({name,age}) {
    console.log(name);
    console.log(age);
  }

printDetail(person);
