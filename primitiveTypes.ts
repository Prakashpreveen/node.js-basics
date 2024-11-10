// let a:number = 1;
// a = 'hello';

// let a:any;
// a = 1
// a = 'hello'

// let a:never;
// a = 1

// let a:any;

// typeof a === 'undefined' ? console.log('Yes'):console.log('No');
// ;

// let b:number[] = [1,2,3];

// for (let index = 0; index < b.length; index++) {
//     const element = b[index];
//     console.log(element);
// }

// b.forEach((element:number)=>{
//     console.log(element);

// })

// --call back function--

// function addition(a:number,b:number,cb:Function):Function {
//     const result:number = a+b;
//     return cb(result)
// }

// function multiple(a:number,b:number,cb:Function):Function {
//     const result:number = a*b;
//     return cb(result)
// }

// addition(10,20,(add:number) =>{
//     console.log('Add, ' + add);
//     multiple(10,add,(mul:number) => {
//         console.log('Multiple, ' + mul);

//     })

// })

// ---Objects---

// interface Employee {
//   name: string;
//   age: number;
//   details: {
//     designation: string;
//   };
// }

// const employees: Employee[] = [
//   {
//     name: "Max",
//     age: 20,
//     details: {
//       designation: "Engg",
//     },
//   },
//   {
//     name: "Alex",
//     age: 30,
//     details: {
//       designation: "Tester",
//     },
//   },
// ];

// for (const employee of employees) {
//   const design: string = employee.details.designation;
//   console.log(design);
// }

// ---Array Functions---
// var animals = ["dog", "cat", "seal", "walrus", "lion", "cat"];

// const firstIndex: number = animals.indexOf("cat");
// const lastIndex: number = animals.lastIndexOf("cat");
// console.log("firstIndex of cat, " + firstIndex);
// console.log("lastIndex of cat, " + lastIndex);

// var nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];
// const over: number = nums.findIndex((element: number) => {
//   return element >= 100;
// });
// console.log("over than 100 index, " + over);

// const word: string = "Hello";

// const splittedWord: string = word.split("").reverse().join("");

// console.log(splittedWord);

// -----Map----
// -----Example - 1-----
// var decArray: number[] = [23, 255, 122, 5, 16, 99, 69];
// var hexDecimal: string[] = decArray.map((element: number) => {
//   return element.toString(16);
// });
// console.log(decArray);
// console.log(hexDecimal);

// -----Example - 2-----
// var actual: string[] = ["hi", "hello", "welcome"];
// var modified: string[] = actual.map((i: string) => {
//   return i === "hi" ? `${i},Max` : i;
// });
// console.log(actual);
// console.log(modified);

// var charSet: string[] = ["**", "bb", "cd", "**", "cc", "**", "dd", "**"];
// var filterVal: string[] = charSet.filter((i: string) => {
//   return i != "**";
// });

// console.log(charSet);
// console.log(filterVal);

// var nums = [1, 45, 2, 16, 9, 12];
// var sum = nums.reduce(function (n1, n2) {
//   return n1 + n2;
// });
// console.log(sum);

// const testCheck = (value: string): boolean => {
//   const checkVal = /^[a-zA-z]+$/;
//   return checkVal.test(value);
// };

// var elemSetSome: any[] = ["**", 123, "aaa", "abc", "-", 46, "AAA"];
// var result1 = elemSetSome.some(testCheck);
// console.log(result1);

// var elemSetEvery: any[] = ["**", 123, "aaa", "abc", "-", 46, "AAA"];
// var result2 = elemSetEvery.every(testCheck);
// console.log(result2);

// interface Book {
//   name: string;
//   author: string;
//   year: string;
//   bookSummary: Function;
// }

// const book: Book = {
//   name: "One Book",
//   author: "John",
//   year: "2024",
//   bookSummary: function () {
//     return `${this.name} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book.bookSummary());
