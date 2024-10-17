// Static methods and properties example

// 1. Car class with static methods and properties
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Static method
  static classInfo() {
    return "This is the Car class";
  }

  // Static property
  static type = "Vehicle";

  // Getter for car description
  get description() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  // Setter for car description
  set description(details) {
    const [year, make, model] = details.split(" ");
    this.year = year;
    this.make = make;
    this.model = model;
  }
}

// 2. Book class with static methods and properties
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  // Static method
  static classInfo() {
    return "This is the Book class";
  }

  // Static property
  static format = "Paperback";

  // Method to display book details
  bookInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  }
}

// 3. Dog class with static methods and properties
class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  // Static method
  static classInfo() {
    return "This is the Dog class";
  }

  // Static property
  static species = "Canine";

  // Method to show dog details
  dogDetails() {
    return `${this.name} is a ${this.breed}, ${this.age} years old`;
  }
}

// 4. Phone class with static methods and properties
class Phone {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Static method
  static classInfo() {
    return "This is the Phone class";
  }

  // Static property
  static category = "Electronics";

  // Method to display phone details
  phoneInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

// 5. Laptop class with static methods and properties
class Laptop {
  constructor(brand, model, processor) {
    this.brand = brand;
    this.model = model;
    this.processor = processor;
  }

  // Static method
  static classInfo() {
    return "This is the Laptop class";
  }

  // Static property
  static category = "Computers";

  // Method to display laptop details
  laptopDetails() {
    return `${this.brand} ${this.model} with ${this.processor} processor`;
  }
}

// Usage examples:

// Car example
const car1 = new Car("Tesla", "Model S", 2021);
console.log(car1.description); // Output: 2021 Tesla Model S
console.log(Car.classInfo()); // Output: This is the Car class
console.log(Car.type); // Output: Vehicle

// Book example
const book1 = new Book("1984", "George Orwell", 328);
console.log(book1.bookInfo()); // Output: 1984 by George Orwell, 328 pages
console.log(Book.classInfo()); // Output: This is the Book class
console.log(Book.format); // Output: Paperback

// Dog example
const dog1 = new Dog("Buddy", "Golden Retriever", 3);
console.log(dog1.dogDetails()); // Output: Buddy is a Golden Retriever, 3 years old
console.log(Dog.classInfo()); // Output: This is the Dog class
console.log(Dog.species); // Output: Canine

// Phone example
const phone1 = new Phone("Apple", "iPhone 13", 2022);
console.log(phone1.phoneInfo()); // Output: Apple iPhone 13 (2022)
console.log(Phone.classInfo()); // Output: This is the Phone class
console.log(Phone.category); // Output: Electronics

// Laptop example
const laptop1 = new Laptop("Dell", "XPS 13", "Intel i7");
console.log(laptop1.laptopDetails()); // Output: Dell XPS 13 with Intel i7 processor
console.log(Laptop.classInfo()); // Output: This is the Laptop class
console.log(Laptop.category); // Output: Computers
