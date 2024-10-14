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
