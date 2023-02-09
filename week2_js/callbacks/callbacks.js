const calculate = (x, y, operation) => {
  return operation(x, y);
};

const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

console.log(calculate(2, 3, add));
console.log(calculate(10, 3, subtract));
console.log(calculate(2, 3, multiply));
console.log(calculate(10, 2, divide));
