// call back function

// function myFun(a){
//     console.log(a)
//     console.log('hello world')
// }

// myFun([1,2,3])

function myFun(callback) {
  console.log("XXX")
  callback('gc');
}

function myFun1(name) {
  console.log("myFun1",name);
}

myFun(myFun1);

function greet(callback) {
  console.log("Greeting:");
  callback("Alice");
}

function sayHello(name) {
  console.log("Hello", name);
}

greet(sayHello);


function fetchData(callback) {
  console.log("Fetching data...");
  callback({ id: 1, name: "Product A" });
}

function handleData(data) {
  console.log("Data received:", data);
}

fetchData(handleData);

function processOrder(callback) {
  console.log("Processing order...");
  callback("Order #1234");
}

function confirmOrder(orderId) {
  console.log("Order confirmed:", orderId);
}

processOrder(confirmOrder);

function calculate(callback) {
  console.log("Performing calculation...");
  callback(5, 10);
}

function sum(a, b) {
  console.log("Sum:", a + b);
}

calculate(sum);

function logMessage(callback) {
  console.log("Logging message...");
  callback("Operation successful");
}

function showMessage(message) {
  console.log("Message:", message);
}

logMessage(showMessage);
