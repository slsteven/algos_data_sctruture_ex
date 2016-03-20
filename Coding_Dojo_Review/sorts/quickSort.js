//quicksort
//choose a pivot
//lesser values go to the left, greater to the right
//recurse over sublists and shift index of start and end arguments
var arr = [7, 2, 1, 6, 8, 5, 3, 4];
function quickSort(arr, start, end){

  var pivot = arr[end];
  var pivotIndex = start;
  var temp;

  if (start < end) {

    (function (arr, start, end) {
      //partion array first by sorting values to the left and right of pivot
      //pivotIndex is the index of where the pivot lies after all values has been swapped
      //ex: [2, 1] => [1,2] => pivotIndex = 0
      //ex: [7, 2, 1, 6, 8, 5, 3, 4] => [2, 1, 3, 4, 8, 5, 7, 6] => pivotIndex = 3
      for (var i = start; i < arr.length; i++) {
        if (arr[i] <= pivot) {
          temp = arr[i];
          arr[i] = arr[pivotIndex];
          arr[pivotIndex] = temp;
          pivotIndex++;
        };
      };
      //return partion index
      console.log(arr);
      return pivotIndex--;
    })(arr, start, end);

    quickSort(arr, start, pivotIndex -1);
    quickSort(arr, pivotIndex + 1, end);

  };
};
var result = quickSort(arr, 0, arr.length - 1);
