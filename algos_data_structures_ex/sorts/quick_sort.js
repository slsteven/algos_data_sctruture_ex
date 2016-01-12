//quicksort
//choose a pivot
//lesser values go to the left, greater to the right
//repeat with the two sublists
var arr = [4, 3, 2, 5, 6, 1];

function quickSort(arr){
  console.log("ARR", arr);
  var pivot = arr[0];

  var left = [];
  var right = [];

  if(arr.length < 2){
    return arr;
  }

  for(var i = 1; i < arr.length; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }
    else{
      right.push(arr[i]);
    }
  }
  return (quickSort(left).concat(pivot).concat(quickSort(right)));

}

var result = quickSort(arr);
console.log(result);
