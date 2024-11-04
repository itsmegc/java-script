// lexical environment, scope chain

const lastName = "Kent";

const printName = function () {
  const firstName = "Clark";
  console.log(firstName);
  console.log(lastName);
};

printName();

// lexical environment, scope chain

const country = "Japan";

function displayCity() {
  const city = "Tokyo";
  console.log(city);
  console.log(country);
}

displayCity();

// lexical environment, scope chain

const mainTopic = "JavaScript";

const showDetails = function () {
  const subTopic = "Closures";
  console.log(subTopic);
  console.log(mainTopic);
};

showDetails();

// lexical environment, scope chain

const language = "Python";

function showFramework() {
  const framework = "Django";
  console.log(framework);
  console.log(language);
}

showFramework();

// lexical environment, scope chain

const department = "Engineering";

const describeRole = function () {
  const role = "Software Developer";
  console.log(role);
  console.log(department);
};

describeRole();

// lexical environment, scope chain

const planet = "Earth";

function displayDetails() {
  const region = "Asia";
  console.log(region);
  console.log(planet);
}

displayDetails();
