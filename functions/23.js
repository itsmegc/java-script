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


// Example 1: Lexical Scope with Closures
const outerConst = "Outer Constant";

function closureExample() {
  const innerConst = "Inner Constant";

  return function innerFunction() {
    console.log("Inside innerFunction:", outerConst); // Accessible
    console.log("Inside innerFunction:", innerConst);  // Accessible
  };
}

const innerFunc = closureExample();
innerFunc(); // Executes innerFunction

// Example 2: Lexical Scope with Function Expressions
const scopeVar = "Scope Variable";

const functionExpressionExample = function() {
  const exprVar = "Expression Variable";

  const nestedFunction = function() {
    console.log("Inside nestedFunction:", scopeVar); // Accessible
    console.log("Inside nestedFunction:", exprVar);  // Accessible
  };

  nestedFunction();
};

functionExpressionExample();

// Example 3: Lexical Scope with Arrow Functions
const arrowScope = "Arrow Scope";

const arrowFunctionExample = () => {
  const innerArrowVar = "Inner Arrow Variable";

  const nestedArrowFunction = () => {
    console.log("Inside nestedArrowFunction:", arrowScope); // Accessible
    console.log("Inside nestedArrowFunction:", innerArrowVar); // Accessible
  };

  nestedArrowFunction();
};

arrowFunctionExample();

// Example 4: Lexical Scope with Multiple Levels
const globalLevel = "Global Level";

function levelOne() {
  const levelOneVar = "Level One Variable";

  function levelTwo() {
    const levelTwoVar = "Level Two Variable";
    console.log("Inside levelTwo:", globalLevel);       // Accessible
    console.log("Inside levelTwo:", levelOneVar);      // Accessible
    console.log("Inside levelTwo:", levelTwoVar);      // Accessible
  }

  levelTwo();
}

levelOne();

// Example 5: Lexical Scope with Nested Functions
function parentFunction() {
  const parentVar = "Parent Variable";

  function childFunction() {
    const childVar = "Child Variable";

    function grandChildFunction() {
      console.log("Inside grandChildFunction:", parentVar); // Accessible
      console.log("Inside grandChildFunction:", childVar);  // Accessible
    }

    grandChildFunction();
  }

  childFunction();
}

parentFunction();
