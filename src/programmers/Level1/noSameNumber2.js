function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    answer.push(arr[i]);
  }
  console.log(answer);
  return answer;
}

solution([4,4,4,3,3]);
