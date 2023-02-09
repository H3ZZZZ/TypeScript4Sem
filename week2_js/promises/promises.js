const calculateWithPromise = (x, y, operation) => {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("x and y must be numbers");
    }
    resolve(operation(x, y));
  });
};

const calculate = async (x, y, operation) => {
  return await operation(x, y);
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

console.log("I will calculate 2 + 3");
(async () => {
  try {
    const result = await calculate(2, 3, add);
    console.log("the answer is: " + result);
  } catch (error) {
    console.log(error);
  }
})();

console.log("I will calculate 10 - 3 + 2 * 5 / 2");
(async () => {
  try {
    const result = await calculateWithPromise(10, 3, subtract)
      .then((result) => calculateWithPromise(result, 2, add))
      .then((result) => calculateWithPromise(result, 5, multiply))
      .then((result) => calculateWithPromise(result, 2, divide));
    console.log("the answer is: " + result);
  } catch (error) {
    throw new Error(error);
  }
})();

console.log("I will calculate 10 - 3 + 2 * 5 / 2");
(async () => {
  try {
    const result = await calculate(10, 3, subtract)
      .then((result) => calculate(result, 2, add))
      .then((result) => calculate(result, 5, multiply))
      .then((result) => calculate(result, 2, divide));
    console.log("the answer is: " + result);
  } catch (error) {
    throw new Error(error);
  }
})();
