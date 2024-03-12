const isEmpty = () => {
  console.error("cannot be empty");
};

const reverseString = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") return isEmpty();
  // let reverseArr = "";
  // const reverseString = str.split(" ").reverse();
  // for (const word of reverseString) {
  //   const reverseWord = word.split("").reverse().join("");
  //   reverseArr += `${reverseWord} `;
  // }
  // return reverseArr;

  //   const backwards = [];
  //   const totalItems = str.length - 1;
  //   for (let i = totalItems; i >= 0; i--) {
  //     backwards.push(str[i]);
  //   }
  //   return backwards.join("");

  return [...str].reverse().join("");
};

console.log(reverseString("Hi My name is Bijay"));
