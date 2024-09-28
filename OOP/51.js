const useMethod = {
  about: function () {
    return `${this.firstName + " " + this.lastName} age is ${
      this.age
    } email id is ${this.email} and address is ${this.address}`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "Kitni dafa";
  },
};

function createUsers(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = useMethod.about;
  user.is18 = useMethod.is18;
  user.sing = useMethod.sing;
  return user;
}

const user1 = createUsers(
  "Sam",
  "Singh",
  "sam.singh@yy.com",
  17,
  "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016"
);

const user2 = createUsers(
  "John",
  "Doe",
  "john.doe@xy.com",
  28,
  "MG Road 2nd Block, Indiranagar, Bangalore-560038"
);

const user3 = createUsers(
  "Ravi",
  "Kumar",
  "ravi.kumar@zz.com",
  42,
  "Jayanagar 3rd Block, JP Nagar, Bangalore-560041"
);

console.log(user1.about());
console.log(user2.about());
console.log(user1.is18());
console.log(user2.is18());
console.log(user2.sing());
