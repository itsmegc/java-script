function CreateUsers(firstName, lastName, email, age, address) {
  // const user = Object.create(useMethod);
  // const user = Object.create(CreateUsers.prototype);
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
  // user.about = useMethod.about;
  // user.is18 = useMethod.is18;
  // user.sing = useMethod.sing;
}

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

// console.log(CreateUsers.prototype)

CreateUsers.prototype.about = function () {
  return `${this.firstName + " " + this.lastName} age is ${
    this.age
  } email id is ${this.email} and address is ${this.address}`;
};

CreateUsers.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUsers.prototype.sing = function () {
  return "Kitni dafa";
};

for (let key in user1) {
  // console.log(key)
  if (user1.hasOwnProperty(key)) {
    console.log(key); // if do not want prototype property
  }
}
