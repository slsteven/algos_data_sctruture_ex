//merge sort
//O(n log n)
var arr = [5, 3, 9, 1, 6, 7, 8, 4, 2];

function mergeSort(arr){
  var left = [];
  var right = [];
  var mid = Math.floor(arr.length/2);
  left = selectionSort(arr.slice(0, mid));
  right = selectionSort(arr.slice(mid));
  console.log(left, right)
  var merged = merge(left, right, arr);
  return merged;
}

var result = mergeSort(arr);
console.log(result);

function merge(left, right, arr){
  var l = r = k = 0;
  while(l < left.length && r < right.length){
    if(left[l] <= right[r]){
      arr[k] = left[l];
      l++;
    }
    else{
      arr[k] = right[r];
      r++;
    }
    k++;
  }
  while(l < left.length && r == right.length) {
    arr[k] = left[l];
    l++;
    k++;
  }
  while(l == left.length && r <right.length) {
    arr[k] = right[r];
    r++;
    k++;
  }
  return arr
}
function selectionSort(arr){
  var min = 0;
  var new_min_idx = 0;
  var len = arr.length;
  var temp = 0;
  for(var i = 0; i < len; i++){
    console.log("START OF ITERATION")
    min = arr[i];
    //iterate through whole array to find min
    for(var j = i+1; j < len; j++){
      console.log("SCAN EACH===========", j)
      if(arr[j] < min){
        min = arr[j];
        new_min_idx = j;
      }
    }
    //move min to sorted side of list
    if(min == arr[new_min_idx]){
      temp = arr[i];
      arr[i] = arr[new_min_idx];
      arr[new_min_idx] = temp;
    }
    console.log("END");
  }
  return arr;
}
