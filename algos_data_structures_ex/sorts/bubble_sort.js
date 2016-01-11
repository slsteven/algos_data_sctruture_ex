//bubble sort

//O(n^2)
//minimum number of iterations =  (n-1)

function bubbleSort(arr){
  var len = arr.length;
  var temp = 0;
  var swapped = false;
  while(!swapped){
    for(var i = 0; i < len-1; i++){
      //left value greater than right. swap.
      if(arr[i] > arr[i+1]){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = false;
      }
      else{
        swapped = true;
      }
    }
  }
  return arr
}

var result = bubbleSort([1, 4, 2, 3, 5]);
console.log(result);
