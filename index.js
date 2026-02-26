// Assignment 1
// A-1
console.log(Number("123") + 7);
console.log(+"123" + 7);
// ================================
// A-2
let input;
// input = "";
// input = 0;
// input = undefined;
// input = false;
if (input) {
  console.log("Valid");
} else {
  console.log("Invalid");
}
// ================================
// A-3
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
// ================================
// A-4
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((num) => num % 2 == 0));
// ================================
// A-5
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const mergedArray = [...firstArray, ...secondArray];
console.log(mergedArray);
// ================================
// A-6
let switchInput;
switchInput = 2;
switch (switchInput) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid number");
}
// ================================
// A-7
const stringArray = ["a", "ab", "abc", "abcd"];
const mappedArray = stringArray.map((inp) => inp.length);
console.log(mappedArray);
// ================================
// A-8
const dividable = (num) => {
  num % 3 == 0 && num % 5 == 0
    ? console.log("Divisible by both")
    : console.log("number can't divided by both 3 and 5");
};
dividable(15);
dividable(20);
dividable(30);
dividable(10);
// ================================
// A-9
const sqaure = (num) => num ** 2;
console.log(sqaure(1), sqaure(2), sqaure(3), sqaure(4), sqaure(5));
// ================================
// A-10
const destructures = (obj) => {
  let { name, age } = obj;
  return `${name} is ${age} years old`;
};
const object = {
  name: "John",
  age: 25,
};
console.log(destructures(object));
// ================================
// A-11
const sum = (...nums) => {
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};
console.log(sum(1, 2, 3, 4, 5));
// ================================
// A-12
const promiseMesage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
};
promiseMesage().then((result) => console.log(result));
// ================================
// A-13
const maxArray = (arr) => Math.max(...arr);
const testArray = [1, 3, 7, 2, 4];
console.log(maxArray(testArray));
// ================================
// A-14
const keys = (obj) => Object.keys(obj);
console.log(keys(object));
// ================================
// A-15
const spaceSplit = (word) => word.split(" ");
console.log(spaceSplit("Hello my name is George"));

/// B - 1
// for..of allows iteration over iterable objects (e.g., arrays, strings, Maps, Sets). // doesn't need callback and you have full control and can use break, continue, and return to manage the loop flow // generally outperform forEach in both speed and memory usage, especially with large datasets
// forEach  Each time forEach is called, a new callback function is created // You cannot use break, continue, or return to control the loop flow within a forEach

// =============================
// B - 2

// Hoisting is moving the declarations to the top of the file // var is initialized as undefined, while let and const are placed in the Temporal Dead Zone
// example :
// console.log(myNameVar); // undifined
// console.log(myNamelet); // ReferenceError
// var myNameVar =  "George" ;
// let myNamelet =  "George" ;

// TDZ works for let and const that makes let and cost throw ReferenceError instead of undifined cuz let and const make it hoisted but can't access the varibale before intitlaized it

// =============================
// B - 3

// == means equal value to so (2 == "2") is true
// === means equal value and type (2 === "2") is false

// =============================
// B - 4

// try-catch is built in error handling so if the code throw an error catch will excute code and we use it with async operations because await converts promise rejections into thrown errors Without try–catch the rejection escapes the function

// =============================
// B - 5
// Type Conversion is the process in JavaScript in which the data type of the variables is converted from one type to another type manually.
// example :
console.log(typeof +"123");
//Type coercion is the automatic conversion of one data type to another by JavaScript during operations. This is also known as implicit type casting.
// example :
console.log(typeof (5 + "5")); // convert it into string
