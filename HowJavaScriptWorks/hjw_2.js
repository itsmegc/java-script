// Compilation: JS code is parsed and checked for errors before execution, but it isn't fully compiled like other languages.

// Code Execution: After compilation, the JS engine executes the code line by line (interpreted).

// Why Compilation?: To catch syntax errors early and optimize code before execution.

// How JavaScript Code Executes: Code runs in two phases—creation (memory allocation) and execution (line-by-line).

// Global Execution Context: The default context where JS code runs; created when the script starts (includes global variables, functions).

// Local Execution Context: Created inside functions; has its own scope and variables local to the function.

// Closure: A function that remembers and accesses variables from its outer scope, even after the outer function has returned.

console.log(this);
console.log(window);
console.log(firstName);

var firstName = "Gaurav";
console.log(firstName);
