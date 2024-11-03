// function execution context   

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
  console.log(arguments); // array like object
  let myVar = "var inside function";
  console.log(myVar);
  const fullName = firstName + " " + lastName;
  return fullName;
}

const personName = getFullName("Bruce", "Wayne");

console.log(personName);

// function execution context   

let greeting = "Hello, World!";
console.log(greeting);
function calculateSum(a, b) {
  console.log(arguments); // array-like object
  let calculationMessage = "Calculating sum...";
  console.log(calculationMessage);
  const sum = a + b;
  return sum;
}

const total = calculateSum(5, 10);

console.log("Total Sum:", total);

// function execution context   

let status = "Active";
console.log(status);
function createUser(username, email) {
  console.log(arguments); // array-like object
  let userMessage = "Creating user profile...";
  console.log(userMessage);
  const userProfile = `Username: ${username}, Email: ${email}`;
  return userProfile;
}

const newUser = createUser("john_doe", "john@example.com");

console.log(newUser);

// function execution context   

let task = "Learning JavaScript";
console.log(task);
function addTask(taskName, priority) {
  console.log(arguments); // array-like object
  let taskInfo = "Task added successfully.";
  console.log(taskInfo);
  const taskDetails = `Task: ${taskName}, Priority: ${priority}`;
  return taskDetails;
}

const taskResult = addTask("Build a website", "High");

console.log(taskResult);

// function execution context   

let game = "Chess";
console.log(game);
function startGame(player1, player2) {
  console.log(arguments); // array-like object
  let gameMessage = "Game started between two players.";
  console.log(gameMessage);
  const match = `Match between ${player1} and ${player2}`;
  return match;
}

const matchDetails = startGame("Alice", "Bob");

console.log(matchDetails);

// function execution context   

let message = "System Online";
console.log(message);
function processOrder(orderId, amount) {
  console.log(arguments); // array-like object
  let orderMessage = "Processing order...";
  console.log(orderMessage);
  const orderDetails = `Order ID: ${orderId}, Amount: $${amount}`;
  return orderDetails;
}

const orderConfirmation = processOrder(101, 250.50);

console.log(orderConfirmation);
