// Generators are functions in JavaScript that can be paused and resumed, allowing for the generation of a sequence of values lazily. They are defined
//  using the function* syntax and use the yield keyword to pause execution and yield a value.

function* fibonacciGenerator() {
    let prev = 0, curr = 1;
    while (true) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }
  
  const fibonacci = fibonacciGenerator();
  console.log(fibonacci.next().value);
  console.log(fibonacci.next().value);
  console.log(fibonacci.next().value);
  console.log(fibonacci.next().value);
  // Continues generating Fibonacci numbers lazily
  