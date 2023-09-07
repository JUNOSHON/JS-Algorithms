function solution(people, limit) {
  
  let boat = 0;
  
  
  for (let i = 0; i < people.length; i++) {
    const other = limit - people[i];
    for (let j = i + 1; j < people.length; j++) {
      if (other >= people[j]) {
        people.splice(j); //해당 원소 삭제
        break;
      }
    }
    boat++;
  }
  console.log(boat);
  return boat;
  
}

solution([70, 50,80, 50], 100);
