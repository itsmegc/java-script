// getter and setters

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // // Setter for fullName
  //  setName(firstName, lastName) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  // }

  // Setter for fullName
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("John", "Doe", 30);
// console.log(person1.fullName())
// Accessing fullName through the getter
// console.log(person1.fullName); // Output: John Doe
// person1.setName("The", "Rock")
// console.log(person1.fullName);

// Setting a new fullName using the setter
console.log(person1.fullName); // Output: Jane Smith
person1.fullName = "Jane Smith";
console.log(person1.fullName); // Output: Jane Smith
