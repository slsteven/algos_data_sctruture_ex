//bubble sort

var bigo = [5, 4, 3, 2, 1]; //worst case
var bigomega = [1, 2, 3, 4, 5]; //best case

//4(n-1) ...linear

function bubbleSort(arr){
  var len = arr.length;
  var temp = 0;
  var swapping = true;
  while(swapping){
    console.log("START of while loop")
    var count = 0;
    for(var i = 0; i < len; i++){
      console.log("=========small iteration #", i)
      //left value greater than right. swap.
      if(arr[i] > arr[i+1]){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        count++;
      }
    }
    console.log("END of while loop")
    if(count > 0){
      swapped = true;
    }
    else{
      swapping = false;
    }
  }
  return arr
}

// var result = bubbleSort(bigo);
// console.log(result);

