// Given an image represented by an NxN matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
// place?

var matrix = [
  [1, 0, 0, 2],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [4, 0, 0, 3]
]

function rotate(matrix, x){
  console.log(matrix);
  //move 8 spaces to turn 90 degrees
  for(var side = 0; side < x / 2; side++){
    var first = side;
    for(var i = first; i < 7; i++){
      for
i = 0 to n
2 temp = top[i]j
3 top[i] = leftfi]
CrackingTheCodinglnterview.com 179
Solutions to Chapter 1 | Arrays and Strings
4 leftfi] = bottom[i]
bottom[i] = right[i]
6 right[i] = temp
    }

  }
}

rotate(matrix, 16);
