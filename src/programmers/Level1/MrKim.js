function solution(seoul) {
  
  let number = 0;
  
  
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      number = i;
    }
  }
  let answer = `김서방은 ${number}에 있다`;
  console.log(answer);
  
  return answer;
}

solution(["Jane", "Kims", "Kim"]);
