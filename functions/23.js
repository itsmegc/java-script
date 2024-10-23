// lexical scope
const globalVar = "Global Scope";

function outerFunction() {
  const outerVar = "Outer Scope";
  
  function innerFunction() {
    const innerVar = "Inner Scope";
    console.log("Inside innerFunction:", globalVar); // Accessible
    console.log("Inside innerFunction:", outerVar);  // Accessible
    console.log("Inside innerFunction:", innerVar);  // Accessible
    
    function nestedFunction() {
      const nestedVar = "Nested Scope";
      console.log("Inside nestedFunction:", globalVar);  // Accessible
      console.log("Inside nestedFunction:", outerVar);   // Accessible
      console.log("Inside nestedFunction:", innerVar);   // Accessible
      console.log("Inside nestedFunction:", nestedVar);  // Accessible
    }
    
    nestedFunction();
  }
  
  innerFunction();
}

outerFunction();

// lexical scope
const outerVar = "Outer Variable";

const functionExpression = function() {
  const localVar = "Local Variable";

  const innerFunction = function() {
    console.log("Inside innerFunction:", outerVar); // Accessible
    console.log("Inside innerFunction:", localVar);  // Accessible
  };

  const arrowFunction = () => {
    console.log("Inside arrowFunction:", outerVar); // Accessible
    console.log("Inside arrowFunction:", localVar);  // Accessible
  };

  innerFunction();
  arrowFunction();
};

functionExpression();

// lexical scope
const topLevelVar = "Top Level";

const myArrowFunction = () => {
  const secondLevelVar = "Second Level";
  
  const nestedArrowFunction = () => {
    const thirdLevelVar = "Third Level";
    console.log("Inside nestedArrowFunction:", topLevelVar); // Accessible
    console.log("Inside nestedArrowFunction:", secondLevelVar); // Accessible
    console.log("Inside nestedArrowFunction:", thirdLevelVar);  // Accessible
  };
  
  nestedArrowFunction();
};

myArrowFunction();

// lexical scope
const topVar = "Top Level Variable";

function firstFunction() {
  const firstVar = "First Level Variable";
  
  function secondFunction() {
    const secondVar = "Second Level Variable";
    console.log("Inside secondFunction:", topVar);   // Accessible
    console.log("Inside secondFunction:", firstVar); // Accessible
    console.log("Inside secondFunction:", secondVar); // Accessible
  }

  secondFunction();
}

firstFunction();

// lexical scope
function outerFunction() {
  const outerVar = "Outer Variable";
  
  function createInnerFunction() {
    const innerVar = "Inner Variable";
    
    return function innerFunction() {
      console.log("Inside innerFunction:", outerVar); // Accessible
      console.log("Inside innerFunction:", innerVar); // Accessible
    };
  }
  
  const innerFunc = createInnerFunction();
  innerFunc();  // Executes innerFunction
}

outerFunction();
