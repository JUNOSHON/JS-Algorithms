function solution(my_string, n) {
  const answer = my_string.substring(my_string.length - n,my_string.length);
  return answer;
  console.log(answer);
  
}
solution("helloWorld",5);

