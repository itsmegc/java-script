const obj1 = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = {};
// obj2.key3 = "value3";

// console.log(obj2.key3);

// ****************  One more way to create empty object **************** 

const obj2 = Object.create(obj1)
obj2.key3 = "value3";

console.log(obj2.__proto__);

// proto_vs_prototype.js

// Create a simple object
let obj = {
  name: 'Gaurav'
};

// Accessing the prototype using __proto__ (legacy feature)
console.log("Using __proto__:", obj.__proto__);

// Accessing the [[Prototype]] using Object.getPrototypeOf() (standard method)
console.log("Using Object.getPrototypeOf():", Object.getPrototypeOf(obj));

// Setting a custom prototype using __proto__ (not recommended)
let customProto = {
  greet: function() {
      console.log('Hello from the prototype!');
  }
};
obj.__proto__ = customProto;  // Modifying prototype via __proto__
obj.greet();  // This will call the greet method from the custom prototype

// Setting a custom prototype using Object.setPrototypeOf() (recommended)
let newProto = {
  sayGoodbye: function() {
      console.log('Goodbye from the new prototype!');
  }
};
Object.setPrototypeOf(obj, newProto);  // Setting prototype via Object.setPrototypeOf()
obj.sayGoodbye();  // This will call the sayGoodbye method from the new prototype

// Accessing the updated [[Prototype]] using Object.getPrototypeOf()
console.log("Updated prototype using Object.getPrototypeOf():", Object.getPrototypeOf(obj));


// example

// Example 1: Basic Object Creation and Property Access
const person1 = {
  firstName: "John",
  lastName: "Doe"
};
console.log(person1.firstName);  // Outputs: John
console.log(person1.lastName);   // Outputs: Doe

// Example 2: Adding Properties to an Empty Object
const car = {};
car.make = "Tesla";
car.model = "Model S";
console.log(car.make);   // Outputs: Tesla
console.log(car.model);  // Outputs: Model S

// Example 3: Using Object.create() with Prototypes
const animal = {
  type: "Mammal"
};
const dog = Object.create(animal);
dog.breed = "Golden Retriever";
console.log(dog.breed);  // Outputs: Golden Retriever
console.log(dog.type);   // Inherited from animal, Outputs: Mammal

// Example 4: Using __proto__ to Access Prototype Properties (Legacy)
const person2 = { name: "Alice" };
console.log(person2.__proto__);  // Outputs: {} (Default prototype object)

// Example 5: Using Object.getPrototypeOf() to Access Prototype (Recommended)
const cat = { species: "Feline" };
console.log(Object.getPrototypeOf(cat));  // Outputs: {} (Default prototype)

// Example 6: Setting Prototype with __proto__ (Not Recommended)
const customMethods = {
  greet() {
    console.log("Hi there!");
  }
};
cat.__proto__ = customMethods;
cat.greet();  // Outputs: Hi there!

// Example 7: Setting Prototype with Object.setPrototypeOf() (Recommended)
const newMethods = {
  sayHello() {
    console.log("Hello, World!");
  }
};
Object.setPrototypeOf(cat, newMethods);
cat.sayHello();  // Outputs: Hello, World!

// Example 8: Prototype Chain and Inheritance
const vehicle = {
  hasEngine: true
};
const motorcycle = Object.create(vehicle);
motorcycle.hasWheels = true;
console.log(motorcycle.hasWheels);  // Outputs: true
console.log(motorcycle.hasEngine);  // Inherited from vehicle, Outputs: true

// Example 9: Constructor Functions and Prototypes
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
};
const person3 = new Person("Bob");
person3.sayName();  // Outputs: My name is Bob

// Example 10: Prototype Inheritance with Object.setPrototypeOf()
const human = {
  walk() {
    console.log("Walking...");
  }
};
const robot = {
  speak() {
    console.log("Beep boop...");
  }
};
Object.setPrototypeOf(robot, human);
robot.speak();  // Outputs: Beep boop...
robot.walk();   // Inherited from human, Outputs: Walking...
