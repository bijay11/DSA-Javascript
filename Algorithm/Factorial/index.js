const findFactorialRecursive = (number) => {
  if (number <= 2) return number;
  return number * findFactorialRecursive(number - 1);
};

const findFactorialInterative = (number) => {
  if (!number) return null;
  let answer = 1;
  if (number === 2) return 2;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
};

console.log(findFactorialRecursive(6));
//console.log(findFactorialInterative(6));
