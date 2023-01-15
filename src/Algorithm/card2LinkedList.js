const fs = require('fs');
const { listenerCount } = require('process');

const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input.shift());


class Node { //노드 생성자 클래스, 자료를 저장하는 value와 이전 노드를 가리키는 prev, 다음 노드를 가리키는 next를 멤버로 가진다.
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList { 
    constructor() {
        this.head = null; //연결리스트 생성자 클래스, 제일 첫 노드를 가리키는 head와 끝 노드를 가리키는 tail을 null로 초기화
        this.tail = null;
        this.length = 0; //현재 길이는 0
    }

    push(value){ // 푸시함수
        const newNode = new Node(value);//인수로 받은 값을 value로 가지는 노드 생성

        if(!this.head){ //첫 노드가 비어있으면 연결리스트의 첫 노드에 새로운 노드 삽입
            this.head = newNode;
        }
        else{
            this.tail.next = newNode;//아니면 끝에 삽입.즉, 연결리스트로 큐 구현
        }
        this.tail = newNode; //if문을 거쳐 제일 끝 노드에 newNode 대입
        this.length++;//전체 큐의 길이 1 증가
        return newNode;//추가한 노드 반환
    }
    getHead(){
        return this.head.value; //제일 첫 노드의 값 반환
    }
    removeHead(){ //제일 첫 노드를 제거하는 함수
        this.head = this.head.next;//연결리스트의 헤드에 원래 연결리스트의 헤드가 가리키던 .next 값 대입
        this.head.prev= null;//헤드의 이전 노드는 null로 초기화
        this.length--;//전체 길이 1 감소
    }
    getSize(){
        return this.length;//연결리스트의 길이를 구하는 함수
    }

    
}
const Deck = new LinkedList();
for(let i =1; i <= n; i++){
    Deck.push(i);//입력받은 값 만큼 카드뭉치 초기화
}
while(1){ //무한루프를 돌다가
    if(Deck.getSize() <= 1) { break ;} //카드뭉치 배열이 1이 되면 종료
    Deck.removeHead();//제일 첫 노드를 제거한다. 즉, 팝한다
    Deck.push(Deck.getHead());//getHead()가 반환하는 값을 Deck의 tail에 추가한다.
    Deck.removeHead();//위의 연산에서는 반환만 했을 뿐 제거하지 않았으므로 제거해준다. 이 과정을 반복한다ㅏ.
}
console.log(Deck.getHead());//마지막으로 남은 카드 반환.