// Example 1: Hoisting
console.log(this);           // Logs the global object (window in browsers)
console.log(window);         // Logs the global 'window' object

console.log(myFunction);     // Logs the function definition due to hoisting
console.log(fullName);       // Logs undefined due to hoisting (var variables are hoisted but uninitialized)

// Function declaration (hoisted)
function myFunction() {
    console.log("This is my function");
}

// Variable declaration using var (hoisted, but initialized as undefined)
var firstName = "Gaurav";
var lastName = "Chand";
var fullName = firstName + " " + lastName;
console.log(fullName);       // Logs "Gaurav Chand"

// Example 2: Block Scope with let and const
{
    let age = 25;            // Block-scoped variable
    const country = "India"; // Block-scoped constant
    console.log(age);        // Logs 25
    console.log(country);    // Logs "India"
}

// console.log(age);         // Error: age is not defined
// console.log(country);     // Error: country is not defined

// Example 3: Function Expression and Hoisting
// console.log(greet);        // Logs undefined (function expressions are not hoisted)
// greet();                  // Error: greet is not a function

var greet = function() {
    console.log("Hello World");
};

greet();                     // Logs "Hello World"

// Example 4: Lexical Scope and Closure
function outerFunction() {
    let outerVar = "I'm outside!";
    
    function innerFunction() {
        console.log(outerVar);  // Accesses outerVar due to closure
    }
    
    return innerFunction;
}

var myClosure = outerFunction(); // outerFunction returns innerFunction
myClosure();                     // Logs "I'm outside!"

// Example 5: The 'this' Keyword in Different Contexts
console.log(this);               // Logs the global object (window in browsers)

let person = {
    firstName: "Gaurav",
    lastName: "Chand",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);  // 'this' refers to the person object
    }
};

person.fullName();              // Logs "Gaurav Chand"

// Example 6: Temporal Dead Zone with let/const
// console.log(temp);            // Error: Cannot access 'temp' before initialization
let temp = 10;
console.log(temp);              // Logs 10

// Example 7: Arrow Function and Lexical 'this'
const myObj = {
    name: "Gaurav",
    showName: function() {
        setTimeout(() => {
            console.log(this.name);  // Arrow function inherits 'this' from its surrounding context
        }, 1000);
    }
};

myObj.showName();               // Logs "Gaurav" after 1 second

// Example 8: Default Parameters
function addNumbers(a = 5, b = 10) {
    console.log(a + b);         // Logs the sum of a and b, using default values if no arguments are passed
}

addNumbers();                   // Logs 15 (default values used)
addNumbers(7);                  // Logs 17 (7 + 10)
addNumbers(7, 3);               // Logs 10 (7 + 3)

// Example 9: Rest Parameters and Spread Operator
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4));   // Logs 10
console.log(sum(5, 10, 15));    // Logs 30

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);              // Logs [1, 2, 3, 4, 5, 6]

// Example 10: Destructuring Assignment
let personObj = { name: "Gaurav", age: 30, country: "India" };
let { name, age, country } = personObj;  // Destructures properties from personObj
console.log(name);                // Logs "Gaurav"
console.log(age);                 // Logs 30
console.log(country);             // Logs "India"
