// Person class with getter and setter
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

  // Setter for fullName
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Car class with getter and setter
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Getter for carDescription
  get carDescription() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  // Setter for carDescription
  set carDescription(description) {
    const [year, make, model] = description.split(" ");
    this.year = year;
    this.make = make;
    this.model = model;
  }
}

// Book class with getter and setter
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  // Getter for bookInfo
  get bookInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  }

  // Setter for bookInfo
  set bookInfo(info) {
    const [title, author, pages] = info.split(", ");
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages);
  }
}

// House class with getter and setter
class House {
  constructor(address, bedrooms, bathrooms) {
    this.address = address;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  // Getter for houseInfo
  get houseInfo() {
    return `${this.address}, ${this.bedrooms} bedrooms, ${this.bathrooms} bathrooms`;
  }

  // Setter for houseInfo
  set houseInfo(info) {
    const [address, bedrooms, bathrooms] = info.split(", ");
    this.address = address;
    this.bedrooms = parseInt(bedrooms);
    this.bathrooms = parseInt(bathrooms);
  }
}

// Movie class with getter and setter
class Movie {
  constructor(title, director, duration) {
    this.title = title;
    this.director = director;
    this.duration = duration;
  }

  // Getter for movieDetails
  get movieDetails() {
    return `${this.title} directed by ${this.director}, duration: ${this.duration} minutes`;
  }

  // Setter for movieDetails
  set movieDetails(details) {
    const [title, director, duration] = details.split(", ");
    this.title = title;
    this.director = director;
    this.duration = parseInt(duration);
  }
}

// Usage examples:

const person1 = new Person("John", "Doe", 30);
console.log(person1.fullName); // Output: John Doe
person1.fullName = "Jane Smith";
console.log(person1.fullName); // Output: Jane Smith

const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1.carDescription); // Output: 2020 Toyota Corolla
car1.carDescription = "2021 Honda Civic";
console.log(car1.carDescription); // Output: 2021 Honda Civic

const book1 = new Book("1984", "George Orwell", 328);
console.log(book1.bookInfo); // Output: 1984 by George Orwell, 328 pages
book1.bookInfo = "Brave New World, Aldous Huxley, 268";
console.log(book1.bookInfo); // Output: Brave New World by Aldous Huxley, 268 pages

const house1 = new House("123 Main St", 3, 2);
console.log(house1.houseInfo); // Output: 123 Main St, 3 bedrooms, 2 bathrooms
house1.houseInfo = "456 Elm St, 4, 3";
console.log(house1.houseInfo); // Output: 456 Elm St, 4 bedrooms, 3 bathrooms

const movie1 = new Movie("Inception", "Christopher Nolan", 148);
console.log(movie1.movieDetails); // Output: Inception directed by Christopher Nolan, duration: 148 minutes
movie1.movieDetails = "The Matrix, Wachowski Brothers, 136";
console.log(movie1.movieDetails); // Output: The Matrix directed by Wachowski Brothers, duration: 136 minutes
