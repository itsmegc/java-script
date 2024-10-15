// static methods and property

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    // Static method: class-level method
    static classInfo() {
      return "This is the Person class";
    }
  
    // Static property
    static species = "Homo sapiens";
  
    // Getter for fullName
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Setter for fullName
    set fullName(name) {
      const [firstName, lastName] = name.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    eat() {
      return `${this.firstName} is eating`;
    }
  
    isSuperCute() {
      return this.age < 2;
    }
  
    isCute() {
      return true;
    }
  }
  
  const person1 = new Person("John", "Doe", 30);
  
  // Access instance methods
  console.log(person1.eat()); // Output: "John is eating"
  
  // Access static method directly on the class
  console.log(Person.classInfo()); // Output: "This is the Person class"
  
  // Access static property directly on the class
  console.log(Person.species); // Output: "Homo sapiens"
  