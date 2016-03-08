

//var arr = [1, 0, 1, 0, 1, 2, 0, 2, 3, 2, 3, 1, 3, 0, 3] hard coded player moves



// function create_board() {
//   var board = [];

//   for(var i=0; i<6; i++) {
//     var rr = Array.apply(null, Array(7)).map(function(){return '*'});

//     board[i] = rr
//   }
// }




  var player_pick = [];
  document.getElementById('board').onclick = function(e) {
    console.log(e.target.id);
    var pick = e.target.id[1]

    //make sure empty array
    if(player_pick[0] == "") {
      player_pick.shift();
    }

    pick = parseInt(pick);
    player_pick.push(pick);
    console.log(player_pick)

    var c = connect([0,1,1,1,2,2,3,2])
    console.log(c);
  }



//matrix [row][col]
//fill last row first
function connect(arr) {
  console.log(board);
  var p1 = 'x';
  var p2 = '0';
  //build the game matrix
  var matrix = [];
  for(var i=0; i<6; i++) {
    var rr = Array.apply(null, Array(7)).map(function(){return '*'});

    matrix[i] = rr
  }
  //return matrix
  var row = matrix.length;
  var col = matrix[0].length;

  console.log(row, col)
  var move;
  //iterate through array and place pieces
  for(var j = 0; j < arr.length; j++) {

    if(j % 2 === 0) {
      move = p1;
    } else {
      move = p2;
    }
    var pick = arr[j];
    //console.log(move, pick);

    if(matrix[5][pick] != '*'){
      if(matrix[4][pick] != '*'){
        if(matrix[3][pick] != '*'){
          if(matrix[2][pick] != '*'){
            if(matrix[1][pick] != '*'){
              if(matrix[0][pick] != '*'){

              } else {
                matrix[0][pick] = move;
                checkwinner(0, pick);
              }
            } else {
              matrix[1][pick] = move;
              checkwinner(1, pick);
            }
          } else {
            matrix[2][pick] = move;
            checkwinner(2, pick);
          }
        } else {
          matrix[3][pick] = move;
          checkwinner(3, pick);
        }
      } else {
        matrix[4][pick] = move;
        checkwinner(4, pick);
      }
    } else {
      matrix[5][pick] = move;
      checkwinner(5, pick);
    }
  }
  //return matrix
  /////////console.log(matrix)
  //check for winner
  ////horizontal


  function chkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a == b) && (a == c) && (a == d));
  }


  function checkwinner() {

    // console.log("check", r, c)
    // console.log(matrix[r][c])
    // console.log(matrix[r][c+1])
    // console.log(matrix[r][c+2])
    // console.log(matrix[r][c+3])


    for (r = 0; r < 6; r++) {
      for (c = 0; c < 4; c++){
        if (matrix[r][c] == "x" && matrix[r][c+1] == "x" && matrix[r][c+2] == "x" && matrix[r][c+3] == "x"){
          //console.log("p1 wins")
          console.log("p1 wins");
        }
        if (matrix[r][c] == "o" && matrix[r][c+1] == "o" && matrix[r][c+2] == "o" && matrix[r][c+3] == "o"){
         console.log('p2 wins');
       }
      }
    }
  }
}

//var c = connect(arr);


