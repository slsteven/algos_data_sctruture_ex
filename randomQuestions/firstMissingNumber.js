// Given an unsorted array of n integers which can contain integers from 1 to n. Some elements can be repeated multiple times and some other elements can be absent from the array. Count frequency of all elements that are present and print the missing elements.

//find the first missing positive number
//input: [-2, 0, 2, 3]
//output: 1

//input: [1, 3, 4, 5]
//output: 2

//input: [5, -1, 2]
//output: 1

//take time and space complexity into consideration

var input = [-1, -3, 5, 1, 2, -7, 4];


//run time is O(n log n) because of the sort;
function findMissing1(arr) {
  var currentNumber = 0;

  var sorted = arr.sort(function(a,b){ return a - b;});

    for (var i = 0; i < arr.length; i++) {
      //have counter start when index is at input value 1 and then move it at the same time as loop
      if (sorted[i] === 1) {
        currentNumber = 1;
      };

      if (sorted[i] + 1 !== sorted[i+1] && currentNumber > 0) {
        return sorted[i] + 1;
      };

      if (i === sorted.length && currentNumber === 0) {
        return 1;
      };
    };
};

console.log("findMissing1: ", findMissing1(input));
console.log('========================================');

//solution for improving run time by creating a copy array and keeping track with a counter
//However this solution will by O(n) space
function findMissing2(arr) {
  var currentNumber = 0;

  var sortedCopy = [];
  //build a new array and assign the index with values from original array
  for (var j = 0; j < arr.length; j++) {
     sortedCopy[arr[j]] = arr[j];
  };

  for (var i = 0; i < sortedCopy.length; i++) {
    //have counter start when index is at input value 1 and then move it at the same time as loop
    if (sortedCopy[i] === 1) {
      currentNumber = 1;
    };

    if (sortedCopy[i] + 1 !== sortedCopy[i+1] && currentNumber > 0) {
      return sortedCopy[i] + 1;
    };

    if (i === sortedCopy.length && currentNumber === 0) {
      return 1;
    };
  };
};

console.log("findMissing2: ", findMissing2(input));
console.log('========================================');



//optimizing for O(n) time and O(1) space
function findMissing3(arr) {
  var tempSwap;
  //variable to track index of last swapped negative number
  var j = 0;
  //segregate all negative numbers to the left and positive to the right
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      tempSwap = arr[i];
      arr[i] = arr[j];
      arr[j] = tempSwap;
      j++;
    };
  };
  console.log(arr, j);
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] >= 1) {
      if (arr[j] + 1 !== arr[j+1]) {
        return arr[j] + 1;
      };
    };
  };
};

console.log("findMissing3: ", findMissing3(input));
console.log('========================================');


var test = [-4]
console.log(test)
