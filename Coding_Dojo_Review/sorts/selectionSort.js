//selection sort
//split into sorted and unsorted portion
//look for minimum number in unsorted list and move to sorted list
//repeat and append new min to sorted list until completel sorted

var bigo = [5, 4, 3, 2, 1]; //O(n^2)
var bigomega = [1, 2, 3, 4, 5]; //O(n^2)


function selectionSort(arr) {
  var currentMinimum = 0;
  var newMinIdx = 0;
  var len = arr.length;
  var temp = 0;
  for(var i = 0; i < len; i++){
    currentMinimum = arr[i];
    //iterate through whole array to find min
    for(var j = i+1; j < len; j++){
      console.log("SCAN EACH===========", j)
      if(arr[j] < currentMinimum){
        currentMinimum = arr[j];
        newMinIdx = j;
      };
    };
    //move min to sorted side of list
    if (currentMinimum !== arr[i]) {
      temp = arr[i];
      arr[i] = arr[newMinIdx];
      arr[newMinIdx] = temp;
    };
  };
  return arr;
};

var result = selectionSort(bigo);
console.log(result);
