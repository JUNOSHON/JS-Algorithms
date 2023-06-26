function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = 1; j < number.length - 1; j++) {
      if (i < j) {
        for (let k = 2; k < number.length; k++) {
          if (j < k && number[i] + number[j] + number[k] === 0) {
            answer++;
          }
        }
      }
    } 
  }
  console.log(answer);
  return answer;
}
solution([-2, 3, 0, 2, -5]);
