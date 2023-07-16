function solution(n) {
  const str = String(n);
  let sum = 0;
  
  for (const a of str) {
    sum += Number(a);
    
  }
  console.log(sum);
  
  return sum;
}

solution(123);
