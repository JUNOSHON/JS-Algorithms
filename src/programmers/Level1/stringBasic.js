function solution(s) {
  
  
  if(s.length==4){
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        return false;
      }
    }
    return true;
  }
  else if(s.length==6){
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        return false;
      }
    }
    return true;
  }
  else{
    return false;
  }
  
  
  
}

solution("1234");

