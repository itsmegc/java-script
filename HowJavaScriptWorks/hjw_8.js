// lexical environment, scope chain

const lastName = "Kent";

const printName = function () {
  const firstName = "Clark";
  console.log(firstName);
  console.log(lastName);
};

printName();
