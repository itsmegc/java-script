// 2015 / es6
// class Keyword
// class are fake

class CreateUsers {
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor called")
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName + " " + this.lastName} age is ${
      this.age
    } email id is ${this.email} and address is ${this.address}`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "Kitni dafa";
  }
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
  
  

  
  console.log(user1.firstName);
  console.log(user2.sing());
  console.log(user3);