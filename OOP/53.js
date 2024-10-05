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

console.log(obj2.key1);

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
