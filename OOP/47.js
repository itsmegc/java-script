// call apply bind

// function myFun() {
//   console.log("hello world");
// }

// myFun.call();

// call
// Function to display user information
function about(hobby, favSinger) {
  console.log(this.name, this.age, hobby, favSinger);
}

// User objects
const user1 = {
  name: "Gaurav",
  age: 8,
};

const user2 = {
  name: "Ankit",
  age: 9,
};

const user3 = {
  name: "Priya",
  age: 12,
};

const user4 = {
  name: "Ravi",
  age: 15,
};

const user5 = {
  name: "Sita",
  age: 20,
};

const user6 = {
  name: "Neha",
  age: 30,
};

const user7 = {
  name: "Rahul",
  age: 28,
};

const user8 = {
  name: "Pooja",
  age: 35,
};

const user9 = {
  name: "Karan",
  age: 40,
};

const user10 = {
  name: "Nisha",
  age: 22,
};

// Using call
about.call(user1, "sleeping", "kr$na");
about.call(user2, "reading", "kr$na");
about.call(user3, "painting", "A.R. Rahman");
about.call(user4, "traveling", "Lata Mangeshkar");
about.call(user5, "cooking", "Sonu Nigam");
about.call(user6, "dancing", "Shreya Ghoshal");
about.call(user7, "gaming", "Badshah");
about.call(user8, "photography", "Arijit Singh");
about.call(user9, "writing", "Asha Bhosle");
about.call(user10, "swimming", "Himesh Reshammiya");

// Using apply
about.apply(user1, ["sleeping", "kr$na"]);
about.apply(user2, ["reading", "kr$na"]);
about.apply(user3, ["drawing", "Taylor Swift"]);

// Using bind
const func1 = about.bind(user1, "sleeping", "kr$na");
const func2 = about.bind(user2, "reading", "kr$na");
const func3 = about.bind(user3, "dancing", "Ed Sheeran");

func1(); // Output: Gaurav 8 sleeping kr$na
func2(); // Output: Ankit 9 reading kr$na
func3(); // Output: Priya 12 dancing Ed Sheeran
