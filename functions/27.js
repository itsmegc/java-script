// function returning function

// HOF 

function myFun() {
  function hello() {
    // console.log("hello world");
    return "hello world";
  }
  return hello;
}

const ans = myFun();

console.log(ans());



function higherOrderFunction(callback) {
    // Perform some operations
    // Call the callback function
    callback();
}
function callbackFunction() {
    console.log("Callback function is executed.");
}
// Passing the callback function to the higher-order function
higherOrderFunction(callbackFunction);


function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); 
console.log(triple(5)); 