// hoisting

// hello();

// const hello = () => {
//   console.log("Hello.....");
// };

// console.log(hello);

// var hello="Hii" // undefined
// let hello="Hii" // 22.js:9 Uncaught ReferenceError: Cannot access 'hello' before initialization
// const hello = "Hii"; // Uncaught ReferenceError: Cannot access 'hello' before initialization

// function inside function

const app = () => {
  console.log("1st");
  const addTwoNumber = (num1, num2) => {
    return num1 + num2;
  };
  const multipleTwoNumber = (num1, num2) => {
    return num1 * num2;
  };
  console.log(addTwoNumber(1,2))
  console.log(multipleTwoNumber(1,2))
};

app();
