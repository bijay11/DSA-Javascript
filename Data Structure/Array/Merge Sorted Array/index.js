const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
const mergeSortedArray = (sortedArr1, sortedArr2) => {
  if (!sortedArr1.length || !sortedArr2.length)
    return "Both arrays should contains elements";
  const combinedArr = [...sortedArr1, ...sortedArr2];

  combinedArr.sort((a, b) => a - b);

  return combinedArr;
};

console.log(mergeSortedArray(arr1, arr2));
