// Intro to array
// Reference type

// Ordered collection of items (Original Code)
var i;  
var emp = new Array();  
emp[0] = "Arun";  
emp[1] = "Varun";  
emp[2] = "John";  
  
for (i = 0; i < emp.length; i++) {  
  document.write(emp[i] + "<br>");  
}  

// Example 1: Array of Numbers
var numbers = new Array();  
numbers[0] = 10;  
numbers[1] = 20;  
numbers[2] = 30;  
numbers[3] = 40;  
  
for (i = 0; i < numbers.length; i++) {  
  document.write(numbers[i] + "<br>");  
}  

// Example 2: Array of Booleans
var boolArray = new Array();  
boolArray[0] = true;  
boolArray[1] = false;  
boolArray[2] = true;  
boolArray[3] = false;  
  
for (i = 0; i < boolArray.length; i++) {  
  document.write(boolArray[i] + "<br>");  
}  

// Example 3: Array of Mixed Types
var mixedArray = new Array();  
mixedArray[0] = 1;  
mixedArray[1] = "Hello";  
mixedArray[2] = true;  
mixedArray[3] = { key: "value" };  
  
for (i = 0; i < mixedArray.length; i++) {  
  document.write(mixedArray[i] + "<br>");  
}  

// Example 4: Array of Objects
var people = new Array();  
people[0] = { name: "Alice", age: 25 };  
people[1] = { name: "Bob", age: 30 };  
people[2] = { name: "Charlie", age: 35 };  
  
for (i = 0; i < people.length; i++) {  
  document.write(people[i].name + " is " + people[i].age + " years old<br>");  
}  

// Example 5: Predefined Array Declaration
var fruits = ["Apple", "Banana", "Cherry", "Mango"];  
  
for (i = 0; i < fruits.length; i++) {  
  document.write(fruits[i] + "<br>");  
}  

// Example 6: Empty Array with Push Method
var cars = [];  
cars.push("Toyota");  
cars.push("Honda");  
cars.push("BMW");  
  
for (i = 0; i < cars.length; i++) {  
  document.write(cars[i] + "<br>");  
}  

// Example 7: Array of Strings with Predefined Elements
var colors = ["Red", "Green", "Blue", "Yellow"];  
  
for (i = 0; i < colors.length; i++) {  
  document.write(colors[i] + "<br>");  
}  

// Example 8: Array of Floating Point Numbers
var temperatures = [32.5, 45.3, 28.9, 37.6];  
  
for (i = 0; i < temperatures.length; i++) {  
  document.write("Temperature: " + temperatures[i] + "°C<br>");  
}  

// Example 9: Array of Functions
var functionsArray = [
  function() { return "Hello"; },
  function() { return "World"; },
  function() { return "!"; }
];
  
for (i = 0; i < functionsArray.length; i++) {  
  document.write(functionsArray[i]() + " ");  
}  

// Example 10: Array with Initial Values and Length Property
var animals = ["Dog", "Cat", "Elephant"];
document.write("Total animals: " + animals.length + "<br>");
  
for (i = 0; i < animals.length; i++) {  
  document.write(animals[i] + "<br>");  
}  

// Example 11: Array with Loop to Add Items
var squares = [];
for (i = 1; i <= 5; i++) {  
  squares.push(i * i);  
}
  
for (i = 0; i < squares.length; i++) {  
  document.write("Square of " + (i + 1) + " is: " + squares[i] + "<br>");  
}  
