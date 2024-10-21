// Example 1: Global Execution Context
console.log(this);            // Logs the global object (window in browsers)
console.log(window);          // Logs the global 'window' object in the browser

var firstName = "Gaurav";     // Global variable declared using var
console.log(firstName);       // Logs "Gaurav" from the global scope

// Example 2: Code Compilation and Execution
var firstName = "Gaurav";     // Variable creation in the compilation phase
console.log(firstName);       // Logs "Gaurav" during the execution phase

// Example 3: Local Execution Context
function greet() {
    var greeting = "Hello";    // Local variable
    console.log(greeting);     // Logs "Hello"
}

greet();                       // Calls the function and creates a local execution context

// Example 4: Closure
function outerFunction() {
    var outerVar = "I'm outside!";
    
    function innerFunction() {
        console.log(outerVar);  // Inner function can access outerVar due to closure
    }
    
    return innerFunction;
}

var myClosure = outerFunction(); // outerFunction returns innerFunction
myClosure();                     // Logs "I'm outside!"

// Example 5: Why Compilation?
var num1 = 10;
var num2 = 20;
console.log(num1 + num2);      // JS engine catches any errors during compilation phase before running this line
