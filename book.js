// function Book(name, author, year) {
//   this.name = name;
//   this.author = author;
//   this.year = year;
//   this.getSummary = () => {
//     return `${this.name} has been written by ${this.author} in ${this.year}`;
//   };
// }

// const book1 = new Book("Book one", "John", "2024");
// const book2 = new Book("Book two", "Doe", "2020");

// console.log(book1.getSummary());
// console.log(book2.getSummary());

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} is written by ${this.author} in ${this.year}`;
};

Book.prototype.getYearsOld = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} old`;
};

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

Magazine.prototype.getTitle = function () {
  return this.title;
};

const maag = new Magazine("Magazine One", "John", "1998", "Nov");

console.log(maag.getTitle());
console.log(maag.getSummary());

const book1 = new Book("Book one", "John", "2024");
const book2 = new Book("Book two", "Doe", "1998");

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book2.getYearsOld());

console.log(book2);
book2.revise("2024");
console.log(book2);
