let answer = require('fs').readFileSync('example.txt').toString();//fs모듈 사용, 주진 정수를 toString메서드를 통해
                                                                //문자열로 반환


function factorial(num) {
        if(num<1){
            return 1;
        }

        return num * factorial(num-1);
}

console.log(factorial(answer));