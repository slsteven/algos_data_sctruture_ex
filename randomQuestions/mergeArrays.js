//merge two sorted arrays

// var a = [2, 4, 5, 7, 9];
// var b = [1, 3, 5, 8, 9];

var a = [1, 3, 5, 7, 7, 8, 8, 9, 9];
var b = [2, 4, 5, 6, 7, 8, 9];

function mergeArrays(a, b) {
  var merged = [];
  var aIndex = bIndex = 0;
  var aLeng = a.length;
  var bLeng = b.length;

  while (aIndex < aLeng && bIndex < bLeng) {
    if (a[aIndex] <= b[bIndex]) {
      merged.push(a[aIndex]);
      aIndex++;
    } else {
      merged.push(b[bIndex]);
      bIndex++;
    };
  };

  while (aIndex < aLeng) {
    merged.push(a[aIndex]);
    aIndex++;
  };

  while (bIndex < bLeng) {
    merged.push(b[bIndex]);
    bIndex++;
  };
  return merged;
};

console.log(mergeArrays(a, b));
