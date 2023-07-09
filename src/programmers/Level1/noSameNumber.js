function solution(arr) {
  
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 2);
    }
    
  }
  
  console.log(arr);
  
  return arr;
}

solution([1,1,3,3,0,1,1]);
