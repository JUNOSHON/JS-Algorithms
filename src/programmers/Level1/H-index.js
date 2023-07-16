function solution(citations) {
  
  
  let hIndex = 0;
  citations.sort((a, b) => {
    return b - a;
  }); // 6 5 3 1 0
  
  console.log(citations);
  
  for (let i = 0; i < citations.length; i++) {
    
    console.log(`자신보다 많이 인용된 논문의 수 ${i}`);
    console.log(`자신이  인용된 횟수 ${citations[i]}`);
    
    if (i < citations[i]) { //현재 인덱스가 원소 값보다 작으면
      hIndex++; //hindex 증가
      console.log(`H인덱스 증가해서 현재 H인덱스는 ${hIndex}`);
    }
    console.log("");
  }
  console.log(hIndex);
  
  return hIndex;
}

solution([3, 0, 6, 1, 5, 3, 1, 2, 3, 2, 1, 3, 4, 392, 4]);
