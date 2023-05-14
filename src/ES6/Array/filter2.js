const arr =[ 1,2,3,4,5];
const iseven = function (num){
  return num % 2 ===0;
};

const newarr = arr.filter(iseven);
console.log(newarr);