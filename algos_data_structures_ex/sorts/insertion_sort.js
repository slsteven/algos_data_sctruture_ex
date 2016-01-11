//insertion sort
//divide into sorted and unsorted
//take next element in unsorted and compare with sorted by iterating right to left
//move elements to right in sorted list to make room for new element

var bigo = [5, 3, 2, 4, 1]; //worst case
var bigomega = [1, 2, 3, 4, 5]; //best case

function insertionSort(arr){
  console.log(arr);
  var len = arr.length;
  var ele = 0;
  for(var i = 1; i < len; i++){
    ele = arr[i]
    var j = i;
    console.log("ELE", ele, arr[j-1])
    while(j > 0 && arr[j-1] > ele){
       console.log(arr, "I=", i, "j=", j);
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = ele;
  }
  return arr;
}

result = insertionSort(bigo);
console.log(result)
