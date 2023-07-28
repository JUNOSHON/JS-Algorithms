function solution(s) {
  
  function isLowerCase(str){
    return str === str.toLowerCase();
  }
  
  
  let arr = Array(200).fill(0);
  
  
  str = s.split(" ");
  
  
  for (let i = 0; i < str.length; i++) {
    
    str[i] = str[i].charAt(0).toUpperCase() + String(str[i].slice(1)).toLowerCase(); //머리글자 대문자변환
    
  }
  // console.log(str);
  //
  //
  // console.log(str);
  
  let answer = str.join(" ");
  // console.log(answer);
  
  
  return answer;
}

solution("3people unFollowed me");
