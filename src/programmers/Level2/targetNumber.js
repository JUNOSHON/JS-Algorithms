function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  
  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  };
  
  
  console.log(answer);
  
  return answer;
}

solution([4, 1, 2, 1], 4);
