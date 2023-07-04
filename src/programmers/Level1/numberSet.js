function solution(n) {
  
  const str = String(n);
  let answer = [];
  
  for (let i = 0; i < str.length; i++) {
    answer.push(str[i]);
  }
  
  answer.sort((a, b) => {
    return a - b;
  });
  
  answer.reverse();
  const a = Number(answer.join(''));
  
  console.log(a);
  
  
  return a;
}

solution(118372);
