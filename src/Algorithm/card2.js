function solution(n){
    let result;
    class Deque { //덱 구현
        constructor() {
            this.arr = [];
            this.head = 0;
            this.tail = 0;
        }
    push_front(item) {
        if(this.arr[0]){//인스턴스의 0번 인덱스의 값이 있으면
            for(let i=this.arr.length; i>0;i--){
                this.arr[i] = this.arr[i-1];//뒤로 한칸씩 밀기
            }
        }
        this.arr[this.head] = item; //인수로 받은 값을 헤드에 추가
        this.tail++; 
    }
    push_back(item) {
        this.arr[this.tail++] = item;
    }
    pop_front(){
        if(this.head >= this.tail){ //빈 덱이라면 null 반환
            return null;
        }
        else{
            const result = this.arr[this.head++];
            
            return result;
        }
    }
    
    pop_back() {
        if(this.head>= this.tail) {
            return null;
        }
        else{
            const result = this.arr[--this.tail];
            return result;
            }
        }
} //클래스 선언부 끝

let Deck = new Deque(); // 카드 뭉치 선언

for(let i = 0; i<=n;i++){//1번 인덱스부터 인수로 받은 N까지 카드뭉치에 차례대로 저장
    Deck[i+1] = Deck.push_back(i+1); 
    
}

console.log(Deck);

    




}

solution(3);