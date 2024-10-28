// New KeyWord

function createUsers(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
createUsers.prototype.about = function () {
  console.log(this.firstName, this.age);
};
const user1 = new createUsers("Gaurav", 44);
console.log(user1);
user1.about()

// New keyword
// 1. create empty object this={}
// 2. return this
// 3.  Object.create(createUsers.prototype) 

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}
Car.prototype.info = function () {
  console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
};
const car1 = new Car("Toyota", "Camry", 2022);
console.log(car1);
car1.info();

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}
Student.prototype.details = function () {
  console.log(`Student: ${this.name}, Grade: ${this.grade}`);
};
const student1 = new Student("Alice", "A");
console.log(student1);
student1.details();


function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
Book.prototype.summary = function () {
  console.log(`Book: "${this.title}" by ${this.author}, ${this.pages} pages`);
};
const book1 = new Book("1984", "George Orwell", 328);
console.log(book1);
book1.summary();


function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}
Product.prototype.showProduct = function () {
  console.log(`Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`);
};
const product1 = new Product("Laptop", 1200, "Electronics");
console.log(product1);
product1.showProduct();


function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
}
Movie.prototype.description = function () {
  console.log(`Movie: "${this.title}", Directed by ${this.director}, Released in ${this.year}`);
};
const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
console.log(movie1);
movie1.description();
