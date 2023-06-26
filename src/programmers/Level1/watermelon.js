function solution(n) {
  const watermelon = "수박";
  const water = "수";
  const melon = "박";
  let str = "";
  var answer = "";
  
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += water;
    } else {
      answer += melon;
    }
    
  }
  console.log(answer);
 
  return answer;
  
  
}


