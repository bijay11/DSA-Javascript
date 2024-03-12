let calculations = 0;

const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  // debugger;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciMaster = () => {
  let cache = {};
  return (fib = (n) => {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) return n;
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  });
};

const fasterFib = fibonacciMaster();
console.log("test fasterFib", fibonacci(35));
console.log("test fasterFib", fasterFib(110));
console.log(`we did ${calculations}`);
