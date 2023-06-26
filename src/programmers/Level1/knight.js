function solution(number, limit, power) {
  let knights = [];
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let count = 1;
    if (i === 1) { //1이면 그냥 1 대입
      knights[i] = 1;
      continue;
    }
    for (let j = 2; j <= i; j++) { //이중 for문으로
      
      if (i % j === 0) {
        count++; //약수개수 찾기
      }
      
      knights[i] = count; //배열 원소를 약수개수로 초기화
    }
    
  }
  
  for(let i = 1; i<=number; i++){
    if(knights[i] > limit){ //제한수치보다 공격력이 크면
      knights[i] = power; //power로 초기화
    }
  }
  
  for(let i = 1; i<=number; i++){
    answer += knights[i]//그렇게 초기화된 원소들을 결과에 누산
  }
  console.log(answer);
  
  return answer;
}
solution(10,3,2);





