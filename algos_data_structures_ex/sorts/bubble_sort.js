//bubble sort

//O(n^2)
//minimum number of iterations =  (n-1)

function bubbleSort(arr){
  var len = arr.length;
  var temp = 0;
  var swapping = true;
  while(swapping){
    var count = 0;
    for(var i = 0; i < len; i++){
      //left value greater than right. swap.
      if(arr[i] > arr[i+1]){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        count++;
      }
    }
    if(count > 0){
      swapped = true;
    }
    else{
      swapping = false;
    }
  }
  return arr
}

var result = bubbleSort([1, 2, 4, 3, 5]);
console.log(result);
