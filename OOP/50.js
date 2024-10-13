const useMethod = {
  about: function () {
    return `${this.firstName + " " + this.lastName} age is ${
      this.age
    } email id is ${this.email} and address is ${this.address}`;
  },
  is18: function () {
    return this.age >= 18;
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
  return user;
}

// Example 1
const user1 = createUsers(
  "Sam",
  "Singh",
  "sam.singh@yy.com",
  17,
  "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016"
);

// Example 2
const user2 = createUsers(
  "John",
  "Doe",
  "john.doe@xy.com",
  28,
  "MG Road 2nd Block, Indiranagar, Bangalore-560038"
);

// Example 3
const user3 = createUsers(
  "Ravi",
  "Kumar",
  "ravi.kumar@zz.com",
  42,
  "Jayanagar 3rd Block, JP Nagar, Bangalore-560041"
);

// Example 4: New user example
const user4 = createUsers(
  "Amit",
  "Verma",
  "amit.verma@abc.com",
  25,
  "Koramangala 4th Block, Bangalore-560034"
);

// Example 5: Another new user
const user5 = createUsers(
  "Priya",
  "Sharma",
  "priya.sharma@abc.com",
  19,
  "Whitefield, Bangalore-560066"
);

// Example 6: New user with different data
const user6 = createUsers(
  "Neha",
  "Patil",
  "neha.patil@def.com",
  35,
  "BTM Layout, Bangalore-560068"
);

// Example 7: Another user
const user7 = createUsers(
  "Ankit",
  "Gupta",
  "ankit.gupta@ghi.com",
  32,
  "Electronic City, Bangalore-560100"
);

// Example 8: Final user example
const user8 = createUsers(
  "Shweta",
  "Kapoor",
  "shweta.kapoor@jkl.com",
  23,
  "HSR Layout, Bangalore-560102"
);

// Logging results for all users
console.log(user1.about());
console
