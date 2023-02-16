function solution(numbers) {
  let string = numbers.map((num) => num + "");
  const answer = string.sort((a, b) => b + a - (a + b)).join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([1, 2, 52, 6]));
