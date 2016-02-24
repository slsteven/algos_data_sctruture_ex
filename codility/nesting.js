//use a stack to keep track of closing parentheses.

function solution(S) {
   var stack = [];
   var temp = [];
    if(S.length === ''){
        return 1
    }
    for(var i = 0; i < S.length; i++){
        if(S[i] === '('){
            temp.push(S[i]);
        } else {
            stack.push(S[i]);
        }

        if(stack.length !== 0){
            if(temp.length === 0){
                return 0;
            } else {
                temp.pop();
                stack.pop();
            }
        }
    }
    if(temp.length === 0 && stack.length === 0){
        return 1;
    } else {
        return 0;
    }
}
