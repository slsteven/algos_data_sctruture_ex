// A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.

// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

// For example, consider array A such that:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:

// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
// Write a function:

// function solution(A);

// that, given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.

// For example, given:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// the function should return 1, as explained above.

// Assume that:

// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−1,000..1,000].
// Complexity:

// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
// Elements of input arrays can be modified.

//O(n^2)

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var left_sum = 0;
    var right_sum = 0;
    var diff = 0;
    var arr = [];
    for(var i = 1; i < A.length; i++){
        left_sum += A[i-1];
        right_sum = 0;
        for(var j = i; j < A.length; j++){
            right_sum += A[j];
        }

        diff = left_sum - right_sum;
        diff = Math.abs(diff)
        arr.push(diff);

    }
        var min = arr[0];
        for(var m = 0; m < arr.length; m++){
            if(arr[m] <= min){
                min = arr[m];
            }
        }
    return min
}


//O(n)
//does not pass two elements and small elements
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var left_sum = 0;

    var diff = 0;
    var total = 0;
    var arr = [];
    for(var i = 0; i < A.length; i++){
       total += A[i];
    }

    for(var j = 0; j < A.length; j++){
        var right_sum = 0;
        left_sum += A[j]
        right_sum = total - left_sum;
        diff = left_sum - right_sum;
        diff = Math.abs(diff)
        arr.push(diff);
    }

        var min = arr[0];
        for(var m = 0; m < arr.length; m++){
            if(arr[m] <= min){
                min = arr[m];
            }
        }
    return min
}
