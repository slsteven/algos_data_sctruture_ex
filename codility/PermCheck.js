//Check whether array A is a permutation.

function solution(A) {
    var sorted = A.sort(function(a,b){ return a - b;})
    var max = sorted[sorted.length-1];

    if(sorted.length !== max){
        return 0;
    }
    for(var i = 0; i < max; i++){
        if(sorted[i] !== i+1){
            return 0;
        }
    }
    return 1;
}
