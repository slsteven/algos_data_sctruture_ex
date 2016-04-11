//reverse an array in place

var input = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  var temp;
  var leng = arr.length
  var mid = Math.floor(leng/2);
  for (var i = 0; i < mid; i++) {
    temp = arr[i];
    arr[i] = arr[leng - 1 - i];
    arr[leng - 1 - i] = temp;
  };
  return arr;
};

console.log(reverseArray(input));
