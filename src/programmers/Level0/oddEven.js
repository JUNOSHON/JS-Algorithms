function solution(n) {
  let answer = 0;
  
  function odd(num) {
    
    let sum = 0;
    for (let i = num; i > 0; i--) {
      if (i % 2 !== 0) {
        sum += i;
      }
      
    }
    
    answer = sum;
    
  }
  
  function even(num) {
    let sum = 0;
    for (let i = num; i > 0; i--) {
      if (i % 2 === 0) {
        sum = sum + i * i;
      }
      
    }
    
    answer = sum;
  }
  
  
  if (n % 2 !== 0) {
    odd(n);
  } else {
    even(n);
  }
  
  return answer;
}

solution(4);
