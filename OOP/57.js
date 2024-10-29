function CreateUsers(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}

// User examples
const user1 = new CreateUsers(
  "Sam",
  "Singh",
  "sam.singh@yy.com",
  17,
  "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016"
);

const user2 = new CreateUsers(
  "John",
  "Doe",
  "john.doe@xy.com",
  28,
  "MG Road 2nd Block, Indiranagar, Bangalore-560038"
);

const user3 = new CreateUsers(
  "Ravi",
  "Kumar",
  "ravi.kumar@zz.com",
  42,
  "Jayanagar 3rd Block, JP Nagar, Bangalore-560041"
);

const user4 = new CreateUsers(
  "Alice",
  "Johnson",
  "alice.johnson@ab.com",
  22,
  "Koramangala 4th Block, Bangalore-560034"
);

const user5 = new CreateUsers(
  "Michael",
  "Smith",
  "michael.smith@bc.com",
  30,
  "Indiranagar 1st Block, Bangalore-560038"
);

const user6 = new CreateUsers(
  "Emma",
  "Williams",
  "emma.williams@cd.com",
  19,
  "Whitefield 1st Stage, Bangalore-560066"
);

const user7 = new CreateUsers(
  "David",
  "Brown",
  "david.brown@de.com",
  45,
  "HSR Layout 3rd Sector, Bangalore-560102"
);

// Additional user examples
const user8 = new CreateUsers(
  "Sophia",
  "Taylor",
  "sophia.taylor@ef.com",
  26,
  "Malleshwaram 5th Cross, Bangalore-560003"
);

const user9 = new CreateUsers(
  "Liam",
  "Anderson",
  "liam.anderson@gh.com",
  34,
  "BTM Layout 2nd Stage, Bangalore-560076"
);

const user10 = new CreateUsers(
  "Olivia",
  "Clark",
  "olivia.clark@hi.com",
  29,
  "Hebbal 1st Main Road, Bangalore-560024"
);

const user11 = new CreateUsers(
  "James",
  "Lewis",
  "james.lewis@ij.com",
  31,
  "Banashankari 2nd Stage, Bangalore-560070"
);

const user12 = new CreateUsers(
  "Isabella",
  "Martin",
  "isabella.martin@kl.com",
  23,
  "Yelahanka New Town, Bangalore-560064"
);

// Prototype methods
CreateUsers.prototype.about = function () {
  return `${this.firstName + " " + this.lastName} age is ${this.age} email id is ${this.email} and address is ${this.address}`;
};

CreateUsers.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUsers.prototype.sing = function () {
  return "Kitni dafa";
};

// Example usage
const users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12];

// Log user details and check if they are 18 or older
users.forEach((user) => {
  console.log(user.about());
  console.log(`Is ${user.firstName} 18 or older? ${user.is18()}`);
});

// Output the keys of user1
for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key); // if do not want prototype property
  }
}
