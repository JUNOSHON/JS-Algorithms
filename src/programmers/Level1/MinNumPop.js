function solution(arr) {
  
  if (arr.length === 1) {
    
    return [-1];
  }
  
  const min = Math.min(...arr);
  
  
  const minnum = arr.indexOf(min);
  arr.splice(minnum,1);
  
  return arr;
}

solution([4, 1, 2, 3]);
