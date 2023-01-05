class Stack{
    constructor(){
        this.arr = [];
    }

    push(item) {
        this.arr.push(item);
    }
    pop() {
        return this.arr.pop();
    }
    peek(){
        return this.arr[this.arr.length-1];
    }
    size(){
        return this.arr.length;
    }
    isEmpty(){
        
        return this.arr.length === 0;
    }

}

const stack = new Stack(); //스택 객체 생성
stack.push(1);
stack.push(2);
stack.pop();
stack.pop();

console.log(stack);

if(stack.isEmpty() === 0){
    console.log("This stack is Empty");
}