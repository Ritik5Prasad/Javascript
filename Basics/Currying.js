// Currying is a functional programming technique
// where a function is transformed into a sequence of functions
// mainFn = f1 -> f2 -> f3

function add(a, b, c) {
  return a + b + c;
}

function curryingFn(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// const addFn = curryingFn(5)(4)(8);
const addFn = curryingFn(5);
const addSecondParameter = addFn(4);
const result = addSecondParameter(8);
console.log(result);
