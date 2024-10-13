"use strict";

// Example 1: Global Context in Strict Mode
// console.log(this); // In strict mode, 'this' would be undefined instead of referring to the global object (window).
// console.log(this === window); // false in strict mode (since 'this' is undefined in global context)

function myFunction() {
  console.log(this); // 'undefined' in strict mode
}

myFunction(); // undefined


// Example 2: Method Inside Object
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(this); // 'this' refers to the person object
  }
};

person.fullName(); // {firstName: "John", lastName: "Doe", fullName: ƒ}


// Example 3: Using 'this' Inside Arrow Function
const person2 = {
  name: "Alice",
  greet: () => {
    console.log(this); // 'this' refers to the global context, so it would be undefined in strict mode
  }
};

person2.greet(); // undefined


// Example 4: Constructor Function with 'this'
function Car(brand) {
  this.brand = brand;
  console.log(this); // 'this' refers to the new Car object instance
}

const car1 = new Car("Toyota"); // Car { brand: "Toyota" }


// Example 5: Using 'this' with 'call' Method
function showDetails() {
  console.log(this.name);
}

const user = {
  name: "Bob"
};

showDetails.call(user); // 'this' refers to the user object passed in call, so it will log "Bob"


// Example 6: Event Listener with 'this'
const button = document.createElement('button');
button.innerText = "Click Me";
button.addEventListener('click', function () {
  console.log(this); // 'this' refers to the button element
});

document.body.appendChild(button); // Adds button to the document
