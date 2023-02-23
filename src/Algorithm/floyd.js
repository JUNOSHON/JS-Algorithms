// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const n = input[0] / 1; //도시 수
// const m = input[1] / 1; //버스 수
// const busInfo = []; //버스의 정보 start, end, cost 로 이루어짐
// for (let i = 2; i < input.length; i++) {
//   busInfo.push(input[i].split(" ").map((e) => e / 1));
// }

// const max = 10000001; //계산할 수 없는 값 설정

// function createEmptyGraph() {
//   // 초기 그래프 만들기
//   let graph = [];
//   for (let i = 0; i < n; i++) {
//     graph.push(Array(n).fill(max)); //전부 다 무한대 값으로 설정
//     graph[i][i] = 0; // 자기 자신은 0
//   }
//   return graph;
// }

// function setInitialFloyd() {
//   // 초기 플로이드 그래프 만들기
//   const floydGraph = createEmptyGraph();
//   for (let i = 0; i < busInfo.length; i++) {
//     const departure = busInfo[i][0];
//     const arrival = busInfo[i][1];
//     const busInfo = busbusInfo[i][2];
//     if (busInfo < floydGraph[departure - 1][arrival - 1]) {
//       floydGraph[departure - 1][arrival - 1] = busInfo;
//     }
//   }
//   return floydGraph;
// }

// function findAnswerWithFloyd(floydGraph) {
//   // (최단거리) 플로이드 그래프 만들기
//   let floydBusRoute = 0;
//   for (let i = 0; i < floydGraph.length; i++) {
//     for (let j = 0; j < floydGraph.length; j++) {
//       if (j === i) continue;
//       else {
//         for (let k = 0; k < n; k++) {
//           if (floydGraph[j][i] !== max && floydGraph[i][k] !== max) {
//             floydBusRoute = floydGraph[j][i] + floydGraph[i][k];
//             if (floydBusRoute < floydGraph[j][k]) {
//               floydGraph[j][k] = floydBusRoute;
//             }
//           }
//         }
//       }
//     }
//   }
//   return floydGraph;
// }

// function changeMaxtoZero(floydGraph) {
//   // 갈 수 없는 곳은 0으로 세팅
//   for (var i = 0; i < floydGraph.length; i++) {
//     for (var j = 0; j < n; j++) {
//       if (floydGraph[i][j] === max) floydGraph[i][j] = 0;
//     }
//   }
//   return floydGraph;
// }

// function print(floydGraph) {
//   // 답 출력하기
//   let answer = "";
//   for (let i = 0; i < floydGraph.length; i++) {
//     answer += floydGraph[i].join(" ") + "\n";
//   }
//   console.log(answer.trim());
// }

// var floydGraph = setInitialFloyd();
// floydGraph = findAnswerWithFloyd(floydGraph);
// floydGraph = changeMaxtoZero(floydGraph);
// print(floydGraph);
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = input[0] / 1; //도시의 수
const m = input[1] / 1; //버스의 수
const busRoutes = []; //버스에 대한 정보, 출발 도시 departure, 도착 도시 arrival
for (let i = 2; i < input.length; i++) {
  busRoutes.push(input[i].split(" ").map((element) => element / 1)); //버스 정보 배열 초기화
}

const max = Infinity; //계산할 수 없는 수

function setEmptyGraph() {
  // 초기 그래프 만들기
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph.push(Array(n).fill(max));
    graph[i][i] = 0; // 자기 자신은 0
  }
  return graph;
}

function setInitialFloyd() {
  // 초기 플로이드 그래프 만들기
  const floydGraph = setEmptyGraph();
  for (let i = 0; i < busRoutes.length; i++) {
    const departure = busRoutes[i][0];
    const arrival = busRoutes[i][1];
    const busRoute = busRoutes[i][2];
    if (busRoute < floydGraph[departure - 1][arrival - 1]) {
      floydGraph[departure - 1][arrival - 1] = busRoute;
    }
  }
  return floydGraph;
}

function findAnswerWithFloyd(floydGraph) {
  // (최단거리) 플로이드 그래프 만들기
  let floydBusRoute = 0;
  for (let i = 0; i < floydGraph.length; i++) {
    for (let j = 0; j < floydGraph.length; j++) {
      if (j === i) continue;
      else {
        for (let k = 0; k < n; k++) {
          if (floydGraph[j][i] !== max && floydGraph[i][k] !== max) {
            floydBusRoute = floydGraph[j][i] + floydGraph[i][k];
            if (floydBusRoute < floydGraph[j][k]) {
              floydGraph[j][k] = floydBusRoute;
            }
          }
        }
      }
    }
  }
  return floydGraph;
}

function changeMaxtoZero(floydGraph) {
  // 갈 수 없는 곳은 0으로 세팅
  for (var i = 0; i < floydGraph.length; i++) {
    for (var j = 0; j < n; j++) {
      if (floydGraph[i][j] === max) floydGraph[i][j] = 0;
    }
  }
  return floydGraph;
}

function print(floydGraph) {
  // 답 출력하기
  let answer = "";
  for (let i = 0; i < floydGraph.length; i++) {
    answer += floydGraph[i].join(" ") + "\n";
  }
  console.log(answer.trim());
}

var floydGraph = setInitialFloyd();
floydGraph = findAnswerWithFloyd(floydGraph);
floydGraph = changeMaxtoZero(floydGraph);
print(floydGraph);
