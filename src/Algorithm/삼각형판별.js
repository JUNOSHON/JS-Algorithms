
function solution(a,b,c){
   
    let longest;
    let answer="YES";
    let sum = a + b + c ;//세 변의 총 합
    //제일 긴 변을 찾아서 longest 변수에 대입
    if(a > b)
    {
        longest = a;
    }
    else
    {
        longest = b;
    }

    if(c > longest) {

        longest = c;

    }
    
    if((sum-longest) <= longest ){//세 변의 합 에서 가장 큰 변을 뺌. 즉, 나머지 두 변의 합이 가장 긴 변보다 작거나 같으면 삼각형 생성 불가능
        answer="NO";
    }
    return answer;

}
console.log(solution(13,33,17));