// Exercise 1

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function greeting(name) {
  console.log(`Hello, ${name}!`);
  readline.close();
}

function greetingCAPITAL(name) {
  console.log(`Hello, ${name.toUpperCase()}!`);
  readline.close();
}

function greetingAndLength(name) {
  console.log(`Hello, ${name}! your name is ${name.length} letters`);
  readline.close();
}

function processUserInput(callback) {
  readline.question(`What's your name? `, callback);
}

// processUserInput(greetingAndLength);

// Exercise 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

const subtract = (x, y) => x - y;

function operateOnNumbers(operator, x, y) {
  return operator(x, y);
}

function multiplyBy10(x) {
  return x * 10;
}
function divideBy2(x) {
  return x / 2;
}

const mathFunction = (arr, firstFunc, secondFunc) => {
  const filterArray = [];
  for (let i = 0; i < arr.length; i++) {
    let numberToReturn = 0;
    let value = firstFunc(arr[i]);
    numberToReturn = secondFunc(value);
    filterArray.push(numberToReturn);
  }
  return filterArray;
};

// console.log(mathFunction(numbers, multiplyBy10, divideBy2));
// console.log(operateOnNumbers(add, 3, 4)); // 7
// console.log(operateOnNumbers(multiply, 3, 4)); // 12
// console.log(operateOnNumbers(subtract, 10, 3)); // 7
// console.log(operateOnNumbers((x,y) => 10,3)) // 7

// Exercise 3

// One common use of the spread operator is to combine multiple arrays into one. For example:
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8, 9, 10];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Object
const obj = { foo: 'bar', x: 42 };
const clonedObj = { ...obj };
console.log(clonedObj); // Object { foo: "bar", x: 42 }

// Function arguments
const func = (a, b, c) => {
    console.log(a, b, c);
  };
  const args = [0, 1, 2];
  func(...args); // 0 1 2