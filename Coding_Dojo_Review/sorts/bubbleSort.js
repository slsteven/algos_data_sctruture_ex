//bubble sort

var bigo = [5, 4, 3, 2, 1]; //worst case
var bigomega = [1, 2, 3, 4, 5]; //best case


//iterate through and swap i and i+1 if they are out of order. repeat loop until completed sorted.
function bubbleSort(arr) {
  var len = arr.length;
  var temp = 0;
  var swapping = true;
  while (swapping) {
    var count = 0;
    for (var i = 0; i < len; i++) {
      console.log("=========small iteration #", i)
      //left value greater than right. swap.
      if (arr[i] > arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        count++;
      };
    };
    if (!count > 0) {
      return arr;
    }
  };
  return arr;
};

var result = bubbleSort(bigomega);
console.log(result);

