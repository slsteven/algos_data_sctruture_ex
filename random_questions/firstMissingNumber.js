//find the first missing positive number
//input: [-2, 0, 2, 3]
//output: 1

//input: [1, 3, 4, 5]
//output: 2

//input: [5, -1, 2]
//output: 1

//take time and space complexity into consideration

var input = [5, 1, 2, 4];


//run time is O(n log n) because of the sort;
function findMissing1(arr) {
  var currentNumber = 0;

  var sorted = arr.sort(function(a,b){ return a - b;});

    for (var i = 0; i < arr.length; i++) {
      //have counter start when index is at input value 1 and then move it at the same time as loop
      if (sorted[i] === 1) {
        currentNumber = 1;
      }
      if (sorted[i] === currentNumber) {
        currentNumber++;
        var nextNumber = currentNumber
        if (sorted[i+1] !== nextNumber) {
          return nextNumber;
        };
      };
      if (i === sorted.length && currentNumber === 0) {
        return 1;
      };
    };
};

console.log("findMissing1: ", findMissing1(input));

//solution for improving run time

function findMissing2(arr) {
  var currentNumber = 0;

  var sortedCopy = new Array(arr.length);
  //build a new array and assign the index with values from original array

  for (var j = 0; j < arr.length; j++) {
     sortedCopy[arr[j]] = arr[j];
  };

  for (var i = 0; i < sortedCopy.length; i++) {
    if (sortedCopy[i] === 1) {
      currentNumber = 1;
    };
    if (sortedCopy[i] === currentNumber) {
      currentNumber++;
      var nextNumber = currentNumber
      if (sortedCopy[i+1] !== nextNumber) {
        return nextNumber
      };
    };
    if (i === sortedCopy.length && currentNumber === 0) {
      return 1;
    };
  };
};

console.log("findMissing2: ", findMissing2(input));

//solution for improving run time and space
function findMissing3(arr) {
  var currentNumber = 0;
  var temp = []

};

console.log("findMissing2: ", findMissing2(input));


