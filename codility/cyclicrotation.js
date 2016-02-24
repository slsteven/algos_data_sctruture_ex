function solution(A, K) {
    var leng = A.length;
    var temp = 0;
    var k = 0;
    while(k < K){
        for(var i = leng-1; i > 0; i--)
        {
            if(i == leng-1){
                temp = A[leng-1];
            }

            A[i] = A[i-1]

            if(i == 1){
                A[0] = temp;
            }
        }
        k++;
    }
    return A;
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
​
function solution(A, K) {
    var leng = A.length;
    var temp = 0;
    var k = 0;
    for(var i = leng-1; i > 0; i--)
    {
        if(i === leng-1){
            temp = A[leng-1];
        }

        A[i] = A[i-1]

        if(i === 1){
            A[0] = temp;
            k++;
        }

        if(i === 1 && k < K){
            i = leng;
            console.log(i);
        }
    }
    console.log(A);
}
