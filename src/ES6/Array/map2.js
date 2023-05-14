const arr = [1,2,3,4,5];
const isEven = function (num) {
  return num %2 === 0;
};

const newarr = arr.map(isEven);
console.log(newarr);