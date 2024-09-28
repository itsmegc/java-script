// arrow function

const user = {
  name: "gaurav",
  age: 8,
  //   about: function (hobby, favSinger) {
  //     console.log(this.name, this.age, hobby, favSinger);
  //   },
  about: () => {
    console.log(this); // arrow function take this as one level up at any cost
    console.log(this.name, this.age);
  },
};

user.about();


// const user = {
//   name: "gaurav",
//   age: 8,
//   about() {
//     console.log(this); // arrow function take this as one level up at any cost
//     console.log(this.name, this.age);
//   },
// };

// user.about();