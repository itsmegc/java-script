const useMethod = {
  about() {
    return `${this.firstName} ${this.lastName} age is ${this.age}, email id is ${this.email}, and address is ${this.address}`;
  },
  is18() {
    return this.age >= 18;
  },
  sing() {
    return "Kitni dafa";
  },
};

function createUser(firstName, lastName, email, age, address) {
  return {
    firstName,
    lastName,
    email,
    age,
    address,
    ...useMethod, // Spread operator to include methods from useMethod
  };
}


const users = [
  createUser("Sam", "Singh", "sam.singh@yy.com", 17, "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016"),
  createUser("John", "Doe", "john.doe@xy.com", 28, "MG Road 2nd Block, Indiranagar, Bangalore-560038"),
  createUser("Ravi", "Kumar", "ravi.kumar@zz.com", 42, "Jayanagar 3rd Block, JP Nagar, Bangalore-560041"),
];

// Output
users.forEach(user => {
  console.log(user.about());
  console.log(`Is ${user.firstName} 18 or older? ${user.is18()}`);
  if (user.is18()) {
    console.log(user.sing());
  }
});
