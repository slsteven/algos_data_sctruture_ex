// Given an image represented by an NxN matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
// place?

var matrix = [
  [1, 0, 0, 2],
  [0, 3, 4, 0],
  [0, 5, 6, 0],
  [4, 0, 0, 3]
]
 // [ 4, 0, 0, 1 ],
 //  [ 0, 0, 3, 0 ],
 //   [ 4, 5, 6, 0 ],
 //   [ 3, 0, 0, 2 ] ]

function rotate(matrix, x) {


  for(var j = 0; j < x / 2; j++) {
    var first = j; //outside layer
    var end = x - 1 - j; //last element according to layer
    for(var i = first; i < end; i++) { //iterate through each "side"
      var offset = i - first;
      //temp
      var temp = matrix[first][i];

      //left to top
      matrix[first][i] = matrix[end - offset][first];

      //bot to left
      matrix[end  - offset][first] = matrix[end][end - offset];

      //right to bot
      matrix[end][end - offset] = matrix[i][end];

      //top to right
      matrix[i][end] = temp;
    }
  }
  console.log(matrix)

}

rotate(matrix, 4);
