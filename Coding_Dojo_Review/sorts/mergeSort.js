//merge sort
//split into left and right halves using recursion
//once broken down to n<2, call merge to start putting it back together.

//O(n log n)
var arr = [5, 3, 9, 1, 6, 7, 8, 4, 2];

function mergeSort(arr){
  var left = [];
  var right = [];
  var len = arr.length;
  if(len < 2){
    return;
  }
  else {
    var mid = Math.floor(len/2);
    //use selection sort to sort left and right halves
    left = arr.slice(0, mid);
    right = arr.slice(mid);
    console.log(left, right, arr)
    mergeSort(left);
    mergeSort(right);
    return merge(left, right, arr);
  }
}

var result = mergeSort(arr);
console.log(result);

function merge(left, right, arr){
  //index for left, right, and original array
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
  //if there are remaining numbers on the left
  while(l < left.length) {
    arr[k] = left[l];
    l++;
    k++;
  }
  //if there are remaining numbers on the right
  while(r < right.length) {
    arr[k] = right[r];
    r++;
    k++;
  }
  return arr
}
