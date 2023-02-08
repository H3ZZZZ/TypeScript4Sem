const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("Initial numbers in array: " + numbers);
// console.log("numbers squared: " + squared);

// 1. create a function
// 2. create a new array that array will be returned
// 3. loop through the array
// 4. foreach element call the function

// function map(array, mapFunc) {
//   const mapArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const result = mapFunc(array[i], i);
//     mapArray.push(result);
//   }
//   return mapArray;
// }

// const square = map(numbers, (num) => num ** 2);
// console.log(square);

// 1. Create an empty array filterArray
// 2. Loop through the array elements
// 3. Called the filterFunc function with the current element as the argument
// 4. If the result is true, push the element to the filterArr array
// 5. Return filterArr array after going through all elements

function myFilter(array, filterFunc) {
  const filterArr = [];
  for (let i = 0; i < array.length; i++) {
    filterFunc(array[i]) && filterArr.push(array[i]);
  }
  return filterArr;
}
const squared = myFilter(numbers, (x) => x ** 2);
console.log("squared numbers: " + squared);
const evenNumbers = myFilter(numbers, (x) => x % 2 === 0);
console.log("even numbers: " + evenNumbers);
const unEvenNumbers = myFilter(numbers, (x) => x % 2 === 1);
console.log("Uneven numbers: " + unEvenNumbers);

// Example of the reduce function

const reduce = (arr, reduceFunc, initialValue) => {
  let sum = initialValue;
  for (let i = 0; i < arr.length; i++) {
    sum = reduceFunc(sum, arr[i]);
  }
  return sum;
};

const sum = reduce(numbers, (sum, num) => sum + num, 0);
const multiply = reduce(numbers, (sum, num) => sum * num, 1);
console.log("The sum of all values in array accumilated: " + sum);
console.log("The sum of all values in array multiplied: " + multiply);
