//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

const findRecurringCharacter = (arr = []) => {
  if (arr.length < 2) {
    return "Cannot compute";
  }

  //   const map = {};
  //   for (const el of arr) {
  //     if (map[el]) {
  //       return el;
  //     }

  //     map[el] = true;
  //   }

  const set = new Set();
  for (const el of arr) {
    if (set.has(el)) {
      return el;
    }
    set.add(el);
  }
  //   return undefined;
};

console.log(findRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(findRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(findRecurringCharacter([2, 3, 4, 5]));
