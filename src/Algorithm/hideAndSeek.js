let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);
let visit = new Array(100001).fill(0);
let answer = 0;

function bfs() {
  let queue = [];
  
  queue.push(n);
  visit[n] = 1;
  let count = 0;
  
  while (queue.length) {
    let len = queue.length
    
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      if (x === k) {
        return count;
      }
      
      for (let i of [x - 1, x + 1, x * 2]) {
        if (i >= 0 && i <= 100000 && visit[i] === 0) {
          visit[i] = 1;
          queue.push(i);
        }
      }
    }
    count++;
  }
}

answer = bfs();
console.log(answer);

