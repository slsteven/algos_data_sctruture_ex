// Find the two repeating elements in a given array

// You are given an array of n+2 elements. All elements of the array are in range 1 to n. And all elements occur once except two numbers which occur twice. Find the two repeating numbers.

// For example, array = {4, 2, 4, 5, 2, 3, 1} and n = 5

//method 1: use two loops

var input = [4, 2, 4, 5, 2, 3, 1];

function findRepeatingElements(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log("dupliate method 1: ", arr[i]);
      };
    };
  };
};
findRepeatingElements(input);
//Time Complexity: O(n^2)
//Auxiliary Space: O(1)
console.log('========================================');

//method 2:
function findRepeatingElements2(arr) {
  var counterArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (counterArray[arr[i]] == undefined){
      counterArray[arr[i]] = arr[i];
    } else {
      console.log("duplicate method 2: ", arr[i])
    }
  };
};
findRepeatingElements2(input);
// Time Complexity: O(n)
// Auxiliary Space: O(n)

console.log('========================================');

