function solution(dartResult) {
  
  
  let result = 0;
  let answer = [];
  let tmp = 0;
  
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) { //숫자일 경우
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) { //얕은 비교 주의, 10일 경우 10으로 하고 0을 패스하기 위해 i++
        tmp = 10;
        i++;
      } else { // 10이 아닐 경우 그대로 temp에 넣어줌.
        tmp = dartResult[i];
      }
    } else if (dartResult[i] === "S") { //1제곱
      answer.push(tmp);
    } else if (dartResult[i] === "D") { //2제곱
      answer.push((Math.pow(tmp, 2)));
    } else if (dartResult[i] === "T") { //3제곱
      answer.push((Math.pow(tmp, 3)));
    } else if (dartResult[i] === "*") { //결과 배열의 해당에 2배, 직전에 2배
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (dartResult[i] === "#") { //결과 배열이 해당에 -
      answer[answer.length - 1] *= -1;
      
    }
  }
  
  for (let i = 0; i < answer.length; i++) { // 보너스, 옵션 적용된 점수들 합치기
    result += Number(answer[i]);
  }
  
  return result;
}
