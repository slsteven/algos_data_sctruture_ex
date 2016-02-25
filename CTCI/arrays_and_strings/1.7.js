// Write an algorithm such that if an element in an MxN matrix is 0, its entire row
// and column are set to 0.
// M rows and N columns

var input = [
  [1,2,3,0,5],
  [0,7,8,9,10],
  [4,1,1,1,12]
]

// output = [
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 1, 1, 0, 12 ]
//]

function matrix2(matrix) {
  var rows = matrix.length;
  var cols = matrix[0].length;

  var row = Array.apply(null, Array(rows)).map(function(){ return false })
  var col = Array.apply(null, Array(cols)).map(function(){ return false })


  for(var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if(matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      };
    };
  };
  console.log(row)
  for(var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if(row[i] || col[j]) {
        matrix[i][j] = 0;
      };
    };
  };

  return matrix;
}

console.log(matrix2(input))
