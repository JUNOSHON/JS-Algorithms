function solution(bridge_length, weight, truck_weights) {

    let answer = 0; //경과시간
    let bridge_weight = 0; // 다리가 견디고 있는 무게
    
    let bridge = Array.from({length: bridge_length}, () => 0 ); // 현재 다리 위에 있는 트럭배열 bridge


    answer++; //1초 증가, 
    bridge.shift(); //큐에 제일 먼저 대기하고 있는 트럭이 다리에 올라간다
    bridge_weight+= truck_weights[0]; //현재 다리가 견디고 있는 무게는 큐에 제일 먼저 대기하고 있던 0번 인덱스 트럭
    bridge.push(truck_weights.shift());//올라간 트럭의 무게를 shift 해서 birdge에 푸시


    while(bridge_weight > 0) { //다리가 견디고 있는 무게가 0보다 높다면, 즉 트럭이 지나가고 있는 상태라면


        answer++; //우선 1초 증가

        bridge_weight -= bridge.shift(); //다리가 견디고 있는 무게에서 큐의 젤 앞, 즉 현재 지나가고있는 트럭의 무게만큼 뺀다.

        if(truck_weights.length > 0 && bridge_weight + truck_weights[0] <= weight) { //지금 다리가 견디고 있는 무게 + 다음 트럭의 무게가 다리가 견딜 수 있는 최대 무게보다 작다면?

            bridge_weight+= truck_weights[0];  //다리가 견디고 있는 무게에 대기하고 있는 트럭 무게 추가
            bridge.push(truck_weights.shift()); 
        }
        else{//그렇지 않다면, 즉 지금 다리에 트럭이 더 올라갈 수 없다면
            bridge.push(0); //현재 다리에 있는 트럭 건너게 하기
        }

    }


 return answer;

}