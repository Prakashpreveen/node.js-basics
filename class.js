// -----Class With Constructor-----
console.log("-----Class With Constructor-----");
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productDetails() {
    console.log(`Product : ${this.name}`);
    console.log(`Price : $${this.price.toFixed(2)}`);
  }

  taxDetails(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pant", 20.5);
const product3 = new Product("UnderWear", 10.19);

product1.productDetails();

const totalTax = product1.taxDetails(salesTax);
console.log(`Product Price (After Tax) : $${totalTax.toFixed(2)}`);

// -----Constructor-----
console.log("-----Constructor-----");

function Cars(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`You Drive ${this.model}`);
  };

  this.yearCalculator = function () {
    const ageOfCar = new Date().getFullYear() - this.year;
    return `Your Car is ${ageOfCar} Years Old`;
  };
}

const car1 = new Cars("Ford", "Mustang", "1980", "grey");
const car2 = new Cars("Chevorlet", "Camaro", "1991", "Green");
const car3 = new Cars("Dodge", "Charger", "2000", "Yellow");

car1.drive();
console.log(car1.yearCalculator());
car2.drive();
console.log(car2.yearCalculator());
car3.drive();
console.log(car3.yearCalculator());

// -----Static Keyword-----
console.log("-----Static Keyword-----");

class User {
  static userCount = 0;

  constructor(userName) {
    this.userName = userName;
    User.userCount++;
  }

  sayHello() {
    console.log(`Hello, My Name is ${this.userName} !!`);
  }

  static getUserCount() {
    console.log(`There are total ${User.userCount} are in online`);
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Karbs");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();
