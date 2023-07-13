function solution(price, money, count) {
  let answer = 0;
  let sum = [];
  let sum1 = 0;
  for (let i = 1; i <= count; i++) {
    
    sum.push(price * i);
  }
  
  
  sum.forEach(num => {
    sum1 += num;
  });
  
  if (sum1 > money) {
    return sum1-money;
  }
  else{
    return 0;
  }
}

solution(3, 20, 4);
