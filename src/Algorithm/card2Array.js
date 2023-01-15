
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

function solution(n) {

    
    let temp; //임시변수
    let Deck = new Array(); //Array형 객체 Deck 선언


    for(let i = 0; i<n;i++){//1번 인덱스부터 인수로 받은 N까지 카드뭉치에 차례대로 저장
        Deck[i] = Deck.push(i); 
        
    }

    while(Deck.length != 1){
        Deck.shift(); //덱의 제일 앞 카드 제거
        temp = Deck.shift(); //그 다음 카드 제거해서 임시변수 temp에 담아놓고
        Deck.push(temp);//  temp를 덱의 제일 뒤에 푸시

        //덱의 원소 수가 1이 아닐때 까지 반복
    }
    return Deck;
}
solution(6);