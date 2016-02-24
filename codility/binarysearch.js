// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, M, A) {
    var leng = A.length;
    var temp = [];
    var total = 0;
    var left_sum = 0;
    var left = null;
    var right = null;
    var result = 0;
    var min = 0;
    for(var j = 0; j < leng; j++){
        total += A[j];
    }

    for(var i = 0; i < leng; i++){
        left_sum += A[i];
        right_sum = total - left_sum;
        if(left_sum >= 5 && right_sum >= 5){

            left = A.slice(0, i+1)
            right = A.slice(i+1);

            // console.log(left, right, left_sum, right_sum)
            if(left < right){

                result = right_sum;
                min = result
                var l = left.slice(0, right.length/2+1);
                var r = left.slice(right.length/2+1);
                // console.log(l, r)
            } else {
                result = right_sum;
                var l = left.slice(0, right.length/2);
                var r = left.slice(right.length/2);


            }

           if(result < min){
                min = result;
           }
        }


    }

    return min
    // for(var m = 0; m <
}


function addit(arr){
    var tot = 0;
    for(var n = 0; n < arr.length; n++){
        tot+=arr[n]
    }
    return tot;
}
