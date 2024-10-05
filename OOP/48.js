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

// examples

// Example 1: Arrow Function in Object Method (Incorrect `this`)

const user1 = {
  name: "Gaurav",
  age: 8,
  about: () => {
    console.log(this); // `this` refers to the global object (or undefined in strict mode)
    console.log(this.name, this.age); // Output: undefined undefined
  },
};

user1.about();

// Example 2: Regular Function in Object Method (Correct `this`)

const user2 = {
  name: "Gaurav",
  age: 8,
  about() {
    console.log(this); // `this` refers to `user2` object
    console.log(this.name, this.age); // Output: Gaurav 8
  },
};

user2.about();

// Example 3: Arrow Function Inside setTimeout (Lexical `this`)

const user3 = {
  name: "Gaurav",
  age: 8,
  printDetails: function () {
    setTimeout(() => {
      console.log(this); // `this` refers to `user3` object
      console.log(this.name, this.age); // Output: Gaurav 8
    }, 1000);
  },
};

user3.printDetails();

// Example 4: Arrow Function Without `this` Binding in an Event Handler

const button = document.createElement("button");
button.textContent = "Click me";

button.addEventListener("click", () => {
  console.log(this); // `this` refers to the global object or undefined in strict mode
  console.log("Button clicked!"); // Output: Button clicked!
});

document.body.appendChild(button);

// Example 5: Arrow Function Returning an Object Literal

const createUser = (name, age) => ({
  name: name,
  age: age,
  isAdult: age >= 18,
});

const user4 = createUser("Gaurav", 25);
console.log(user4); // Output: { name: 'Gaurav', age: 25, isAdult: true }
