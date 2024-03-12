const fibonacciIterative = (n) => {
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
  const fiboArr = [0, 1];
  if (n < 3) return fiboArr;
  for (let i = 2; i < n; i++) {
    fiboArr.push(fiboArr[i - 2] + fiboArr[i - 1]);
  }

  return fiboArr[n - 1];
};

const fibonacciRecursive = (n) => {
  // let fiboArr = [0, 1];
  // if (n < 3) return fiboArr;
  if (n < 2) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(fibonacciIterative(60));
//console.log(fibonacciRecursive(40));
