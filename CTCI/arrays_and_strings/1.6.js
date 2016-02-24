// Given an image represented by an NxN matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
// place?

var matrix = [
  [1, 0, 0, 2],
  [0, 3, 4, 0],
  [0, 5, 6, 0],
  [4, 0, 0, 3]
]

function rotate(matrix, x){
  var top = [];
  var left = [];
  var right = [];
  var bot = [];
  var leng = matrix.length -1;
  for(var j = 0; j < x / 2; j++){
    var first = j; //outside layer
    var end = n - 1 - j; //last element according to layer
    for(var i = first; i < end; i++){

      //top
      top.push(matrix[0][i]);

      right.push(matrix[i][leng])

      bot.push(matrix[3][i])

      left.push(matrix[i][0])
    }
  }
  console.log(top, right, bot, left)
}

rotate(matrix, 4);
