//selection sort
//split into sorted and unsorted
//look for minimum number in unsorted list and move to sorted list
//repeat and append new min to sorted list

var bigo = [5, 4, 3, 2, 1]; //O(n^2)
var bigomega = [1, 2, 3, 4, 5]; //O(n^2)


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

// var result = selectionSort(bigo);
// console.log(result);
