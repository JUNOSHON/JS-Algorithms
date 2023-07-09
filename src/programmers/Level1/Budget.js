function solution(d, budget) {
  let sum = 0;
  let sum1 = 0;
  let count = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
  }
  if (sum == budget) {
    console.log(d.length);
    return d.length;
  }
  
  d.sort((a, b) => {
    return a - b;
  });
  
  for (let i = 0; i < d.length; i++) {
    if (sum1 <= budget) {
      sum1 += d[i];
      if (sum1 > budget){
        break;
      }
        count++;
    }
  }
  console.log(count);
  return count;
  
  
}

solution([1, 3, 2, 5, 4], 9);
