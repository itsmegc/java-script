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


// lexical environment, scope chain

const brand = "Tesla";

function showCarModel() {
  const model = "Model S";
  console.log(model);
  console.log(brand);
}

showCarModel();

// lexical environment, scope chain

const genre = "Science Fiction";

const describeBook = function () {
  const bookTitle = "Dune";
  console.log(bookTitle);
  console.log(genre);
};

describeBook();

// lexical environment, scope chain

const university = "MIT";

function showDepartment() {
  const department = "Computer Science";
  console.log(department);
  console.log(university);
}

showDepartment();

// lexical environment, scope chain

const operatingSystem = "Linux";

const displayEditor = function () {
  const editor = "VS Code";
  console.log(editor);
  console.log(operatingSystem);
};

displayEditor();

// lexical environment, scope chain

const continent = "Africa";

function showCountry() {
  const country = "Nigeria";
  console.log(country);
  console.log(continent);
}

showCountry();
