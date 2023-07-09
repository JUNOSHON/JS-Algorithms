function solution(nums) {
  let answer = [];
  const hasPhoneketmon = Math.trunc(nums.length / 2); //가질수있는 폰켓몬의 수
  
  for (let i = 0; i < nums.length; i++) {
    if(answer.length < hasPhoneketmon){
      if(!answer.includes(nums[i])){
        answer.push(nums[i]);
      }
    }
  }
  
  console.log(answer.length);
  return answer.length
}

solution([3, 1, 2, 3]);
