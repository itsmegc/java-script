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


// Example 6: Arrow Function Inside Array Method (Lexical `this`)

const user6 = {
  name: "Gaurav",
  scores: [50, 60, 70],
  calculateTotal: function () {
    let total = 0;
    this.scores.forEach(score => {
      total += score;
    });
    console.log(this); // `this` refers to `user6` object
    console.log("Total Score:", total); // Output: Total Score: 180
  },
};

user6.calculateTotal();

// Example 7: Regular Function Inside Array Method (Non-Lexical `this`)

const user7 = {
  name: "Gaurav",
  scores: [50, 60, 70],
  calculateTotal: function () {
    let total = 0;
    this.scores.forEach(function (score) {
      total += score;
      console.log(this); // `this` does not refer to `user7` here, but the global scope
    });
    console.log("Total Score:", total); // Output may vary based on `this`
  },
};

user7.calculateTotal();

// Example 8: Arrow Function with Default Parameters

const greet = (name = "Guest") => {
  console.log(`Hello, ${name}!`);
};

greet("Gaurav"); // Output: Hello, Gaurav!
greet(); // Output: Hello, Guest!

// Example 9: Arrow Function to Shorten Code with Implicit Return

const square = num => num * num;

console.log(square(5)); // Output: 25

// Example 10: Arrow Function as a Callback in Event Listener

const input = document.createElement("input");
input.placeholder = "Type something";

input.addEventListener("input", (event) => {
  console.log(this); // `this` refers to global object or undefined in strict mode
  console.log("Input value:", event.target.value); // Output: Value of the input field
});

document.body.appendChild(input);
