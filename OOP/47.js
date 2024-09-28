// call apply bind

// function myFun() {
//   console.log("hello world");
// }

// myFun.call();

// call
// Example
function about(hobby, favSinger) {
  console.log(this.name, this.age, hobby, favSinger);
}
const user1 = {
  name: "gaurav",
  age: 8,
};

const user2 = {
  name: "ankit",
  age: 9,
};

about.call(user1, "sleeping", "kr$na");
about.call(user2, "reading", "kr$na");

// apply

about.apply(user1, ["sleeping", "kr$na"]); //  send in array

// bind

const func = about.bind(user1, "sleeping", "kr$na"); // return function
func();
